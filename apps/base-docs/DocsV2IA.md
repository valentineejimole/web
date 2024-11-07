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

# Detailed IA with Existing Docs {#detailed-ia-with-existing-docs}

## Getting Started (top nav item)

*Much of this is to be built and the docs don't exist today*

Sidebar:
- **Quickstart**  (section)
  - Deploy on Base Quickstart  (document)
  - OnchainKit Quickstart  (document)
- **Introduction**  (section)
  - Why Base  (document)
  - Explore All Tools  (document)
  - Building Onchain  (document)
  - Onchain Development Lifecycle  (document)
- **Get Setup**  (section)
  - Setting Up Your Dev Environment  (document)
  - Docs Tour (Inspired by Stripe)  (document)
- **Migrating to Base**  (section)
  - To Be Built (document)

## App Tools (top nav item)

### OnchainKit (sidebar item)
Sidebar under onchainKit:
- **Quickstart Guide**  (section)
  - Getting Started  (document)
- **Introduction**  (section)  
- **Tutorials**  (section)
  - Create a Basename Profile Component (Outdated?)  (document)
  - Lifecycle Status  (document)
  - Tailwind CSS Integration  (document)
  - Theme Customization  (document)
  - Use Basenames  (document)
  - Use Coinbase Smart Wallet and EOAs with OnchainKit  (document)
- **Templates**  (section)
  - Existing templates with link-out icons  (document)
- **Documentation**  (section)
  - Components Section  (document)
  - API Section  (document)
  - Utilities  (document)
  - Types  (document)
- **FAQ & Troubleshooting**  (section)
  - *To Be Built (TBB)*  (document)
- **Support & Contribution**  (section)
  - How to Contribute  (document)
  - Report a Bug  (document)

### Basenames (sidebar item)
Sidebar under basenames:
- **Quickstart Guide**  
- **Introduction**  
- **Tutorials**  (section)
  - Add Frames to a Basename  (document)
  - Basenames \+ Wagmi Tutorial  (document)
  - Basenames \+ OnchainKit Tutorial  (document)
- **Documentation**  (section)
  - To Be Built (TBB)  (document)
- **FAQ & Troubleshooting**  (section)
  - Basenames FAQ  (document)
- **Support & Contribution**  (section)
  - How to Contribute  (document)
  - Report a Bug  (document)

### Verifications (sidebar item)
Sidebar under verifications:
- **Quickstart Guide**  (section)
  - Existing Quickstart on CDP  (document)
- **Introduction**  (section)
  - Welcome to Coinbase Verifications  
  - Use Cases  
- **Tutorials**  (section)
  - To Be Built (TBB)  (document)
- **Documentation**  (section)
  - Attestations Document  (document)
- **FAQ & Troubleshooting**  
- **Support & Contribution**  (section)
  - Verifications Discord  (document)

## Wallet Tools (top nav item)  


### Wallet SDK (sidebar item)
Sidebar under wallet sdk:
- **Quickstart Guide**  (section)
  - Wallet SDK & Mobile SDK  (document)
- **Introduction**  (section)
  - Existing welcome page \+ Features  (document)
- **Tutorials**  (section)
  - Adding Tokens to Coinbase Wallet  (document)
  - Sample Applications  (document)
- **Documentation**  (section)
  - Wallet SDK (Existing Section)  (document)
  - Wallet Mobile SDK  (document)
  - Smart Wallet  (document)
  - Supported environments  (document)
  - Whitelisted networks  (document)
  - Developer Settings  (document)
  - UX Guidelines  (document)
  - Coinbase Wallet Injected Ethereum Provider  (document)
  - XMTP  (document)
- **FAQ & Troubleshooting**  (section)
  - Existing FAQ  (document)
  - Errors  (document)
  - Handling Multiple Injected Extensions  (document)
  - Mobile Dapp Integration via Deep Linking  (document)

### Smart Wallet (Base Wallet) (sidebar item)
Sidebar under smart wallet:
- **Quickstart Guide**  (section)
  - Existing Quick Start  (document)
- **Introduction**  (section)
  - Why Smart Wallet  (document)
  - Launch Ready Checklist  (document)
  - Wallet library support  (document)
  - Base Gasless Campaign  (document)
- **Tutorials**  (section)
  - Existing Guides Section  (document)
  - Coinbase Smart Wallet Tutorial (from base.org)  (document)
  - Smart Wallet and Rainbow Kit  (document)
- **Documentation**  (section)
  - Smart Wallet SDK  (document)
  - Smart Contracts  (document)
  - Magic Spend  (document)
- **FAQ & Troubleshooting**  (section)
  - Existing FAQ  (document)

### Mobile Wallet Protocol (sidebar item)
Sidebar under mobile wallet protocol:
- **Quickstart Guide**  (section)
  - To be built  (document)
- **Introduction**  (section)
  - Existing overview  (document)
- **Tutorials**  (section)
  - To be built  (document)
- **Documentation**  (section)
  - Existing Docs other than overview  (document)
- **FAQ & Troubleshooting**  (section)
  - To be built  (document)


**Support & Contribution** (sidebar Item at same level in side nave as other sidebar items)

- Lift up into left nav for better accessibility given Wallet’s unified support


## Chain Tools

### Paymaster (sidebar item)
Sidebar under paymaster:
- **Quickstart Guide**  (section)
  - Existing Quickstart Page  
- **Introduction**  (section)
  - Welcome Page  (document)
- **Tutorials**  (section)
  - Headless Quickstart  (document)
  - ERC20 Paymaster Integration  
- **Documentation**  (section)
  - Gasless Transactions with Paymaster  (document)
  - API Reference  (document)
  - Errors  (document)
  - Security  (document)
- **FAQ & Troubleshooting**  (section)
  - Existing Troubleshooting Page  (document)
- **Support & Contribution**  (section)
  - Paymaster Discord  (document)


## Base Chain

- **Quickstart Guide**  (section)
  - To be built  (document)
- **Introduction**  (section)
  - To be built  (document)
- **Tutorials**  (section)
  - Run a Base Node  (document)
  - Bridge an L1 Token to Base  (document)
- **Documentation**  (section)
  - Network Information  
  - Base Contracts  (document)
  - Fees  (document)
  - Differences Between Ethereum and Base  (document)
  - Decentralizing Base with Optimism  (document)
  - Node Providers  (document)
  - Network Faucets  (document)
  - Security  (document)
- **FAQ & Troubleshooting**  (section)
  - To be built  (document)
- **Support & Contribution**  (section)
  - To be built  (document)

## Guides (top nav item)

### Use Case Guides (sidebar item)
Sidebar under use case guides:
- **Finance**  (section)
  - Build a Smart Wallet Funding App with OnchainKit (Magic Spend?)  (document)
  - Access Real-Time Asset Data Using Pyth Price Feeds  (document)
- **Creator**  (section)
  - NFT Minting with Zora  (document)
  - Convert Farcaster Frame to Open Frame Using OnchainKit  (document)
- **Commerce**  (section)
  - Build an eCommerce App Using Coinbase Commerce and OnchainKit  (document)
  - Deploy a Shopify Storefront with Coinbase Commerce  (document)

### Life-Cycle Guides (sidebar item)
Sidebar under life-cycle guides:
- **Onboarding**  (section)
  - To be built  (document)
- **Activating**  (section)
  - Transactions  (document)
  - NFT Minting  (document)
  - No Code Minting  (document)
- **Growing**  (section)
  - Frames  (document)
    - Cast Actions  (document)
    - Gating and Redirects  (document)
    - Deploy to Vercel  (document)
    - Hyperframes  (document)
- **Retaining**  (section)
  - Create Email Campaigns for Smart Wallets Using Resend  (document)
- **Monetizing**  (section)
  - To be built  (document)

### General Development Guides (sidebar item)
Sidebar under general development guides:
- **Smart Contract Development**  (section)
  - Hardhat  (document)
    - Deploy with Hardhat  (document)
      - Debugging Smart Contracts  (document)
      - Optimizing Gas Usage  (document)
      - Reducing Contract Size  (document)
      - Analyzing Test Coverage  (document)
    - Foundry  (document)
      - Deploy with Foundry  
      - Setup with Base  (document)
      - Testing Smart Contracts  (document)
    - Remix  (document)
      - Deploy with Remix  (document)
    - Tenderly  
      - Deploy with Tenderly  (document)
    - ThirdWeb  (document)
      - Deploy with ThirdWeb  (document)
      - Build with ThirdWeb  (document)
    - Verify Contract with BaseScan  
    - Generate Random Numbers Contracts Using Supra dVRF (Advanced)  (document)
  - **NFTs**  (section)
    - Simple Onchain NFTs  (document)
    - Complex Onchain NFTs  (document)
    - Signature Mint  (document)
    - ThirdWeb Unreal NFT Items  (document)
  - **Token Gating**  (section)
    - Gate IRL Events with Nouns  (document)
  - **Client-Side Development**  (section)
    - Introduction to Providers  (document)
  - **Account Abstraction**  (section)
    - Account Abstraction on Base Using Biconomy  
    - Account Abstraction on Base Using Particle Network  
    - Account Abstraction on Base Using Privy and the Base Paymaster  
  - **Cross-Chain**  (section)
    - Send Messages and Tokens from Base to Other Chains Using Chainlink CCIP  (document)
    - Send Messages from Base to Other Chains Using LayerZero V2  (document)
  - **IPFS**  (section)
    - Deploy an Onchain App with Fleek  (document)

### **Documents to Remove**

- Remove many existing pages under “Tools” on [docs.base.org/docs](http://docs.base.org/docs) in favor of the Ecosystem page.  
  - Cross-Chain  
  - Account Abstraction  
  - Onramps  
  - Oracles  
  - Data Indexers  
  - User Onboarding

