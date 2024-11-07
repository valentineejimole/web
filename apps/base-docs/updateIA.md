# Technical Plan for Updating Information Architecture

## Overview

This document outlines the steps to update the existing `apps/base-docs` project to align with the new Information Architecture (IA) described in the `DocsV2IA.md` file. The update involves restructuring navigation, organizing content, and implementing new features.

## Steps

1. **Review Current Structure**:
   - Analyze the current Docusaurus setup, focusing on `docusaurus.config.js` and `sidebars.js`.
   - Examine the `src/` directory for components, constants, CSS, pages, theme, and utilities.

2. **Update Navigation**:
   - **Top-Level Navigation**: Modify `docusaurus.config.js` to reflect new top-level navigation items like "Getting Started", "App Tools", "Wallet Tools", etc.
   - **Side Navigation**: Update `sidebars.js` to match the new IA, restructuring categories and items accordingly.

3. **Update Content Organization**:
   - **Docs and Tutorials**: Reorganize existing tutorials and documentation to their new locations as per the new IA. This may involve creating new directories or files within `docs/` and `tutorials/`.
   - **Guides and Learn Sections**: Ensure these sections are organized according to the new IA, potentially updating `base-learn/` and `tutorials/`.

4. **Update Configuration**:
   - **Docusaurus Configuration**: Update `docusaurus.config.js` to include any new plugins or themes required by the new IA. Ensure the configuration supports the new navigation and content structure.
   - **Environment Variables**: Check for any new environment variables needed for the updated IA and update `.env.example` accordingly.

5. **Implement New Features**:
   - **Right Navigation Bar**: Implement the right navigation bar for each document as described in the DocsV2IA.md. This may involve updating the theme or creating new components in `src/theme/`.
   - **Feedback Mechanism**: Add the feedback mechanism below the table of contents in each document, potentially creating a new component in `src/components/`.

6. **Testing and Validation**:
   - Run the development server using `yarn workspace @app/base-docs dev` to test the updated site.
   - Validate that all navigation links work correctly and that the content is organized as per the new IA.

7. **Documentation**:
   - Update this document with the steps taken to implement the new IA, including changes to configuration files, the structure of the `src/` directory, and any new components or features added.
