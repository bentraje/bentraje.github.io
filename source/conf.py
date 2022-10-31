# Configuration file for the Sphinx documentation builder.
#
# For the full list of built-in configuration values, see the documentation:
# https://www.sphinx-doc.org/en/master/usage/configuration.html

# -- Project information -----------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#project-information

project = 'BT Notes'
copyright = '2022, BT'
author = 'BT'
release = '0.1'

# -- General configuration ---------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#general-configuration

extensions = [
    'sphinxcontrib.gist',
    'sphinx.ext.viewcode',
    'sphinx.ext.linkcode',
    'sphinxcontrib.gitinclude',
    'myst_parser',
    'sphinx_toolbox',
    ]
# , ''

templates_path = ['_templates']
exclude_patterns = []
source_suffix = ['.rst', '.md']
github_username = 'bentraje'
github_repository = 'https://github.com/bentraje/c4d-python'

#extensions = []

# -- Options for HTML output -------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#options-for-html-output

html_theme = "sphinx_rtd_theme"
html_static_path = ['_static']


def linkcode_resolve(domain, info):
    if domain != 'py':
        return None
    if not info['module']:
        return None
    filename = info['module'].replace('.', '/')
    #return "https://github.com/bentraje/c4d-python/blob/master/shading-and-lighting/export_mat_list_with_geo_assignment.py"
    return "https://raw.githubusercontent.com/bentraje/c4d-python/master/shading-and-lighting/export_mat_list_with_geo_assignment.py?token=GHSAT0AAAAAABY2GTEACCVZ5SJVBEO6MS5KYZVHMQA"