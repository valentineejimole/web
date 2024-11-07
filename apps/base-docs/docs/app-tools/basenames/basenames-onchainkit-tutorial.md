---
title: Basenames Onchainkit Tutorial
description: Learn how to integrate Basenames with Onchainkit in your applications
keywords: [Base, Basenames, Onchainkit, tutorial, integration]
hide_table_of_contents: true
---

# Basenames Onchainkit Tutorial

Basenames are a powerful tool for establishing onchain identity by assigning human-readable names to wallet addresses. Integrating Basenames with Onchainkit simplifies the process of managing and displaying these names within your applications. This tutorial will guide you through the steps to seamlessly integrate Basenames into your Onchainkit-enabled app.

## Prerequisites

- A registered Basename
- Basic understanding of React and TypeScript
- A development environment set up with Node.js
- Existing project using Onchainkit

## Step 1: Install Onchainkit

If you haven't already, install Onchainkit in your project:

```bash
npm install @coinbase/onchainkit
# or
yarn add @coinbase/onchainkit
```

## Step 2: Configure Onchainkit

Ensure your project is set up to use Onchainkit. Typically, this involves wrapping your application with the appropriate provider.

```typescript:title="src/App.tsx"
import React from 'react';
import { OnchainkitProvider } from '@coinbase/onchainkit';
import YourComponent from './YourComponent';

function App() {
  return (
    <OnchainkitProvider>
      <YourComponent />
    </OnchainkitProvider>
  );
}

export default App;
```

## Step 3: Integrate Basenames Component

Create a component to display Basenames using Onchainkit's `<Identity />` component.

```typescript:title="src/components/BasenameDisplay.tsx"
import React from 'react';
import { Identity, Name, Avatar } from '@coinbase/onchainkit';

interface BasenameDisplayProps {
  address: `0x${string}`;
}

const BasenameDisplay: React.FC<BasenameDisplayProps> = ({ address }) => {
  return (
    <Identity address={address}>
      <Avatar />
      <Name />
    </Identity>
  );
};

export default BasenameDisplay;
```

## Step 4: Use the BasenameDisplay Component

Integrate the `BasenameDisplay` component into your application where you want to show the user's Basename.

```typescript:title="src/components/UserProfile.tsx"
import React from 'react';
import { useAccount } from 'wagmi';
import BasenameDisplay from './BasenameDisplay';

const UserProfile: React.FC = () => {
  const { address } = useAccount();

  if (!address) return <p>Please connect your wallet.</p>;

  return (
    <div>
      <h2>User Profile</h2>
      <BasenameDisplay address={address} />
    </div>
  );
};

export default UserProfile;
```

## Step 5: Fetch and Display Additional Metadata

You can enhance the Basename component to fetch and display additional metadata such as social links or descriptions.

```typescript:title="src/components/BasenameDetails.tsx"
import React, { useEffect, useState } from 'react';
import { Identity, Name, Avatar } from '@coinbase/onchainkit';

interface BasenameDetailsProps {
  address: `0x${string}`;
}

interface Metadata {
  twitter?: string;
  github?: string;
  description?: string;
}

const BasenameDetails: React.FC<BasenameDetailsProps> = ({ address }) => {
  const [metadata, setMetadata] = useState<Metadata>({});

  useEffect(() => {
    const fetchMetadata = async () => {
      // Replace with your method to fetch metadata from Basename profile
      const response = await fetch(`/api/getMetadata?address=${address}`);
      const data = await response.json();
      setMetadata(data);
    };

    fetchMetadata();
  }, [address]);

  return (
    <Identity address={address}>
      <Avatar />
      <Name />
      {metadata.description && <p>{metadata.description}</p>}
      {metadata.twitter && <a href={`https://twitter.com/${metadata.twitter}`}>Twitter</a>}
      {metadata.github && <a href={`https://github.com/${metadata.github}`}>GitHub</a>}
    </Identity>
  );
};

export default BasenameDetails;
```

## Conclusion

By following this tutorial, you've successfully integrated Basenames with Onchainkit in your application, enhancing user experience with readable onchain identities. Continue exploring Onchainkit's features to further enrich your application's functionality.

For more detailed information, refer to the [Onchainkit Documentation](https://docs.coinbase.com/onchainkit).
