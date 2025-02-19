'use client';  // Ensures this is client-side only

import { GoogleAnalytics } from 'nextjs-google-analytics';

export function GoogleAnalyticsWrapper() {
  return <GoogleAnalytics trackPageViews />;
}