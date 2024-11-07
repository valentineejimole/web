# Base Docs V2 IA | In Review


**TL;DR**  
Base Docs V2 will consolidate various documentation sites into a single platform. To provide developers with easy access, we propose an information architecture (IA) organized around logical product groups. This structure aligns with team organization, marketing initiatives, and developers' familiarity with our products. A [mapping of current documents](#detailed-ia-with-existing-docs) to this IA is provided at the end.

## Top-Level Navigation (css class: navbar_items)
Outermost bullets are the navigation items, the nested bullets are the docs within each section in the sidebar

- **Getting Started**  
  *Essential information for all developers building on Base.*  
- **App Tools**  
  *Products that help developers build applications.*  
  - OnchainKit  
  - Paymaster  
  - Basenames  
  - Verifications  
- **Wallet Tools**  
  - Base Wallet / Wallet SDK  
- **Base Data Tools** *(TBD)*  
  - Data and Indexers  
- **L3 Launcher**	  
- **Base Chain**  
  *(Possible alternative: "Base Protocol" to differentiate from “Chain Tools”)*  
  *Protocol-level details.*  
- **Guides**  
  *Cross-product guides for common use cases.*
- **Learn**
  *Keep the existing learn section as is*

---

## Top Nav Overview Pages

When a top nav item (such as app tools), they are directed to the overview page for that section.

On that overview page:

- Highlights tutorials addressing common pain points.  
- Illustrates value with code sandbox where applicable.  
- Links to use-case guides in the Guides section.  
- Displays the side navigation in a visually appealing manner.

---

## Left Nav For Each Page

The side navigation should guide developers from getting started to integrating advanced features.

The side nav will first be split by product/tool. For each product/tool (e.g., **Basenames**, **OnchainKit**, **Paymaster**), the side navigation will include:

- **Quickstart Guide**  
- **Introduction**  
- **Tutorials**  
  - Step-by-Step Tutorials  
  - Use Case Specific Tutorials  
  - Best Practices  
- **Documentation**  
  - API Reference  
  - Technical Specifications  
  - Configuration Options  
- **FAQ & Troubleshooting**  
  - Common Issues  
  - Solutions and Workarounds  
- **Support & Contribution**  
  - Contact Support  
  - Contribution Guidelines

---

## Document Right Nav

Each document will have its own navigation bar on the right which shows the table of contents for that article. As the user scrolls, it updates their position in the document

Below the table of contents, a low-friction feedback mechanism: button options (e.g., "Was this page helpful?") will exists with a one click response 

---

## Guides

Focus on cross-product use cases to help developers build common features.

Existing tutorials not tied to specific products will be moved here under:

- **Getting Started Building Onchain**  
  *General setup and concepts.*  
- **Use Case Guides**  
  *Feature or product-specific guides.*

Alternatively, consider adding them to the separate "Learn" section for novice developers to avoid cluttering the Guides section.

---

# Detailed IA with Existing Docs {#detailed-ia-with-existing-docs}

## Getting Started

*Much of this is to be built and the docs don't exist today*

- **Quickstart**  
  - Deploy on Base Quickstart  
  - OnchainKit Quickstart  
- **Introduction**  
  - Why Base  
  - Explore All Tools  
  - Building Onchain  
  - Onchain Development Lifecycle  
- **Get Setup**  
  - Setting Up Your Dev Environment  
  - Docs Tour (Inspired by Stripe)  
- **Migrating to Base**  
  - To Be Built (TBB)

## App Tools

### OnchainKit

- **Quickstart Guide**  
  - Getting Started  
- **Introduction**  
- **Tutorials**  
  - Create a Basename Profile Component (Outdated?)  
  - Lifecycle Status  
  - Tailwind CSS Integration  
  - Theme Customization  
  - Use Basenames  
  - Use Coinbase Smart Wallet and EOAs with OnchainKit  
- **Templates**  
  - Existing templates with link-out icons  
- **Documentation**  
  - Components Section  
  - API Section  
  - Utilities  
  - Types  
- **FAQ & Troubleshooting**  
  - *To Be Built (TBB)*  
- **Support & Contribution**  
  - How to Contribute  
  - Report a Bug

### Basenames

- **Quickstart Guide**  
- **Introduction**  
- **Tutorials**  
  - Add Frames to a Basename  
  - Basenames \+ Wagmi Tutorial  
  - Basenames \+ OnchainKit Tutorial  
- **Documentation**  
  - To Be Built (TBB)  
- **FAQ & Troubleshooting**  
  - Basenames FAQ  
- **Support & Contribution**

### Verifications

- **Quickstart Guide**  
  - Existing Quickstart on CDP  
- **Introduction**  
  - Welcome to Coinbase Verifications  
  - Use Cases  
- **Tutorials**  
  - To Be Built (TBB)  
- **Documentation**  
  - Attestations Document  
- **FAQ & Troubleshooting**  
- **Support & Contribution**  
  - Verifications Discord

## Wallet Tools

[P/PS: Smart Wallet Docs](https://docs.google.com/document/d/1bGplRq9UZel_WU2d8BNunbXlRwudU46LuuIJG5VIeIg/edit?tab=t.0#heading=h.gjk5dphitsfo)

### Wallet SDK

- **Quickstart Guide**  
  - Wallet SDK & Mobile SDK  
- **Introduction**  
  - Existing welcome page \+ Features  
- **Tutorials**  
  - Adding Tokens to Coinbase Wallet  
  - Sample Applications  
- **Documentation**  
  - Wallet SDK (Existing Section)  
  - Wallet Mobile SDK  
  - Smart Wallet  
    - Pull in section from smartwallet.dev (also exists in dedicated smart wallet section)   
  - Supported environments  
  - Whitelisted networks   
  - Developer Settings  
  - UX Guidelines  
  - Coinbase Wallet Injected Ethereum Provider  
  - XMTP  
- **FAQ & Troubleshooting**  
  - Existing FAQ  
  - Errors   
  - Handling Multiple Injected Extensions   
  - Mobile Dapp Integration via Deep Linking 

### Smart Wallet (Base Wallet)

- **Quickstart Guide**  
  - Existing Quick Start  
- **Introduction**  
  - Why Smart Wallet  
  - Launch Ready Checklist  
  - Wallet library support   
  - Base Gasless Campaign   
- **Tutorials**  
  - Existing Guides Section  
  - Coinbase Smart Wallet Tutorial (from base.org)  
  - Smart Wallet and Rainbow Kit  
- **Documentation**  
  - Smart Wallet SDK  
  - Smart Contracts  
  - Magic Spend  
- **FAQ & Troubleshooting**  
  - Existing FAQ

### Mobile Wallet Protocol

Current Docs: https://mobilewalletprotocol.github.io/wallet-mobile-sdk/docs/spec/messages

- **Quickstart Guide**  
  - To be built  
- **Introduction**  
  - Existing overview  
- **Tutorials**  
  - To be built  
- **Documentation**  
  - Existing Docs other than overview  
- **FAQ & Troubleshooting**  
  - To be built

### Magic Spend (To be built) 

Right now it's just the github: https://github.com/coinbase/MagicSpend

- **Quickstart Guide**  
- **Introduction**  
- **Tutorials**  
- **Documentation**  
- **FAQ & Troubleshooting**

**Support & Contribution**

- Lift up into left nav for better accessibility given Wallet’s unified support

## Base Data Tools *(TBD)*

## Chain Tools

### Paymaster

- **Quickstart Guide**  
  - Existing Quickstart Page  
- **Introduction**  
  - Welcome Page  
- **Tutorials**  
  - Headless Quickstart  
  - ERC20 Paymaster Integration  
- **Documentation**  
  - Gasless Transactions with Paymaster  
  - API Reference  
  - Errors  
  - Security  
- **FAQ & Troubleshooting**  
  - Existing Troubleshooting Page  
- **Support & Contribution**  
  - Paymaster Discord

### L3 Launcher *(Docs TBD)*

- **Quickstart Guide**  
- **Product Introduction**  
- **Tutorials**  
- **Documentation**  
- **FAQ & Troubleshooting**  
- **Support & Contribution**

## Base Chain

- **Quickstart Guide**  
- **Introduction**  
- **Tutorials**  
  - Run a Base Node  
  - Bridge an L1 Token to Base  
- **Documentation**  
  - Network Information  
  - Base Contracts  
  - Fees  
  - Differences Between Ethereum and Base  
  - Decentralizing Base with Optimism  
  - Node Providers  
  - Network Faucets  
  - Security  
- **FAQ & Troubleshooting**  
- **Support & Contribution**

## Guides

*Could align these guides with the structure of DevTools*

* *Use Case Guides*  
  * *Finance*  
  * *Creator*  
  * *Commerce*  
* *Life-Cycle Guides*  
  * *Onboarding*  
  * *Activating*  
  * *Growing*  
  * *Retaining*  
  * *Monetizing*   
* *General Guides (Use case agnostic, novice focused)*

Current guides don’t generally fit in these categories but could focus it this way as we build out additional guides. The below illustrates how we could fit existing guides into this structure

- ### Use Case Guides

- **Finance**  
  - Build a Smart Wallet Funding App with OnchainKit (Magic Spend?)  
  - Access Real-Time Asset Data Using Pyth Price Feeds  
- **Creator**  
  - NFT Minting with Zora  
  - Convert Farcaster Frame to Open Frame Using OnchainKit  
- **Commerce**  
  - Build an eCommerce App Using Coinbase Commerce and OnchainKit  
  - Deploy a Shopify Storefront with Coinbase Commerce

- ### Life-Cycle Guides

- Onboarding  
- Activating  
  - Transactions  
  - NFT Minting  
  - No Code Minting  
- Growing  
  - Frames  
    - Cast Actions  
    - Gating and Redirects  
    - Deploy to Vercel  
    - Hyperframes  
- Retaining  
  - Create Email Campaigns for Smart Wallets Using Resend  
- Monetizing

- ### General Development Guides

  - **Smart Contract Development**  
    - Hardhat  
      - Deploy with Hardhat  
      - Debugging Smart Contracts  
      - Optimizing Gas Usage  
      - Reducing Contract Size  
      - Analyzing Test Coverage  
    - Foundry  
      - Deploy with Foundry  
      - Setup with Base  
      - Testing Smart Contracts  
    - Remix  
      - Deploy with Remix  
    - Tenderly  
      - Deploy with Tenderly  
    - ThirdWeb  
      - Deploy with ThirdWeb  
      - Build with ThirdWeb  
    - Verify Contract with BaseScan  
    - Generate Random Numbers Contracts Using Supra dVRF (Advanced)  
  - **NFTs**  
    - Simple Onchain NFTs  
    - Complex Onchain NFTs  
    - Signature Mint  
    - ThirdWeb Unreal NFT Items  
  - **Token Gating**  
    - Gate IRL Events with Nouns  
  - **Client-Side Development**  
    - Introduction to Providers  
  - **Account Abstraction**  
    - Account Abstraction on Base Using Biconomy  
    - Account Abstraction on Base Using Particle Network  
    - Account Abstraction on Base Using Privy and the Base Paymaster  
  - **Cross-Chain**  
    - Send Messages and Tokens from Base to Other Chains Using Chainlink CCIP  
    - Send Messages from Base to Other Chains Using LayerZero V2  
  - **IPFS**  
    - Deploy an Onchain App with Fleek

### **Documents to Remove**

- Remove many existing pages under “Tools” on [docs.base.org/docs](http://docs.base.org/docs) in favor of the Ecosystem page.  
  - Cross-Chain  
  - Account Abstraction  
  - Onramps  
  - Oracles  
  - Data Indexers  
  - User Onboarding

