"use client";

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Sticker } from 'lucide-react'; // Import the icon
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });


const FeedbackForm = ({ 
  src = '',
  triggerType = 'image', // 'image' or 'text'
  linkText = 'Share Feedback',
  imageSrc = '/images/icon-boy-phone-talk.png'
}) => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await fetch('https://bentraje-api-production.up.railway.app/receivefeedback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email,
          message,
          src
        })
      });
      setIsSubmitted(true);
    } catch (error) {
      console.error('Submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 640);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const renderTrigger = () => {
    if (triggerType === 'image') {
      return (
        <Button 
          variant="ghost" 
          className="fixed bottom-2 right-0 px-2 py-0 hover:bg-transparent focus:ring-2 focus:ring-primary"
          aria-label="Open feedback form"
        >
          <img
            src={imageSrc}
            alt="Feedback icon"
            className="transition-transform duration-200 hover:scale-105"
            style={{
              width: isSmallScreen ? '46px' : '64px',
              height: isSmallScreen ? '46px' : '64px',
            }}
          />
        </Button>
      );
    }

    return (
      <Button 
        variant="link" 
        className="inline font-inherit text-inherit leading-none bg-transparent border-0 cursor-pointer text-primary hover:text-primary/90 transition-colors duration-200 p-0 m-0 h-auto appearance-none"
        style={{
          // Reset all possible spacing
          lineHeight: 'inherit',
          verticalAlign: 'baseline'
        }}
        aria-label="Open feedback form"
      >
        {linkText}
      </Button>
    );
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        {renderTrigger()}
      </DialogTrigger>
      
      <DialogContent className="max-w-sm mx-auto rounded-lg bg-white dark:bg-gray-900">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold text-gray-900 dark:text-gray-100">
            Feedback Form
          </DialogTitle>
          <DialogDescription className="text-gray-600 dark:text-gray-400">
            Got any ideas? I'd love to hear them! 💡😊
          </DialogDescription>
        </DialogHeader>

        {isSubmitted ? (
          <div className="space-y-4 text-gray-700 dark:text-gray-300">
            <p>Thanks so much for your feedback! 😊</p>
            <p>I can't promise I'll be able to make it happen, but I really appreciate you taking the time ❤️</p>
            <p>Have a great day ahead! ☀️</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-2">
              <Input
                id="email"
                placeholder="Your Email (Optional, if you want updates)"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-800 dark:border-gray-700 dark:text-white"
              />
            </div>

            <Textarea
              id="feedback"
              placeholder="How can we improve?"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-800 dark:border-gray-700 dark:text-white min-h-[120px]"
            />

            <div className="flex justify-end">
              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="bg-primary text-white hover:bg-primary/90 transition-colors duration-200 disabled:opacity-50"
              >
                {isSubmitting ? 'Sending...' : '💬 Share Your Thoughts!'}
              </Button>
            </div>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default FeedbackForm;
