const contractAddress = "0x44b4669402fCB8c8Ee7b4CdC5ac3B842acB1F9A0";

const contractABI = [
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_id",
        "type": "uint256"
      }
    ],
    "name": "buyProperty",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_id",
        "type": "uint256"
      }
    ],
    "name": "listProperty",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "id",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "price",
        "type": "uint256"
      }
    ],
    "name": "PropertyListed",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "id",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "oldPrice",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "newPrice",
        "type": "uint256"
      }
    ],
    "name": "PropertyPriceUpdated",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "id",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "owner",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "location",
        "type": "string"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "price",
        "type": "uint256"
      }
    ],
    "name": "PropertyRegistered",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "id",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "oldOwner",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "newOwner",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "price",
        "type": "uint256"
      }
    ],
    "name": "PropertySold",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "id",
        "type": "uint256"
      }
    ],
    "name": "PropertyUnlisted",
    "type": "event"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "_location",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "_price",
        "type": "uint256"
      }
    ],
    "name": "registerProperty",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_id",
        "type": "uint256"
      }
    ],
    "name": "unlistProperty",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_id",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_newPrice",
        "type": "uint256"
      }
    ],
    "name": "updatePrice",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getMyProperties",
    "outputs": [
      {
        "internalType": "uint256[]",
        "name": "",
        "type": "uint256[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_id",
        "type": "uint256"
      }
    ],
    "name": "getProperty",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      },
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      },
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_id",
        "type": "uint256"
      }
    ],
    "name": "getPropertyHistory",
    "outputs": [
      {
        "internalType": "address[]",
        "name": "",
        "type": "address[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "properties",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "id",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "owner",
        "type": "address"
      },
      {
        "internalType": "string",
        "name": "location",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "price",
        "type": "uint256"
      },
      {
        "internalType": "bool",
        "name": "forSale",
        "type": "bool"
      },
      {
        "internalType": "uint256",
        "name": "createdAt",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "lastSoldAt",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "propertyCount",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "propertyHistory",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  }
];

const platformOwnerName = "Suhaib Alhashmi";
const platformOwnerTitle = "Platform Administrator";
const platformSignature = "Signed by Suhaib Alhashmi";
const platformStamp = "Real Estate DApp Official Stamp";

let provider;
let signer;
let contract;

function goToPage(page) {
    window.location.href = page;
  }
  
  function setStatus(message, type = "info") {
    const statusEl = document.getElementById("statusMessage");
    if (!statusEl) return;
  
    statusEl.textContent = message;
    statusEl.className = "status-message";
  
    if (type === "success") {
      statusEl.classList.add("status-success");
    } else if (type === "error") {
      statusEl.classList.add("status-error");
    } else {
      statusEl.classList.add("status-info");
    }
  }
  
  async function setupContract() {
    
    if (!window.ethereum) {
      throw new Error("MetaMask is not installed");
    }

    const correctNetwork = await checkCorrectNetwork();
    if (!correctNetwork) throw new Error("Wrong network");
  
    provider = new ethers.BrowserProvider(window.ethereum);
    signer = await provider.getSigner();
    contract = new ethers.Contract(contractAddress, contractABI, signer);
  }
  
  async function connectWallet() {
    const walletAddressEl = document.getElementById("walletAddress");
  
    try {
      if (!window.ethereum) {
        setStatus("MetaMask is not installed.", "error");
        return;
      }
      const correctNetwork = await checkCorrectNetwork();
      if (!correctNetwork) return;

      provider = new ethers.BrowserProvider(window.ethereum);
      await provider.send("eth_requestAccounts", []);
      signer = await provider.getSigner();
  
      const address = await signer.getAddress();
      localStorage.setItem("connectedWallet", address);
  
      if (walletAddressEl) {
        walletAddressEl.textContent = `Wallet: ${address}`;
      }
  
      setStatus("Wallet connected successfully.", "success");
  
      setTimeout(() => {
        window.location.href = "./dashboard.html";
      }, 2000);
    } catch (error) {
      console.error("connectWallet error:", error);
      setStatus("Failed to connect wallet.", "error");
    }
  }
  
  function loadSavedWallet() {
    const walletAddressEl = document.getElementById("walletAddress");
    const savedWallet = localStorage.getItem("connectedWallet");
  
    if (walletAddressEl && savedWallet) {
      walletAddressEl.textContent = `Wallet: ${savedWallet}`;
    }
  
    const currentPage = window.location.pathname.split("/").pop();
  
    if (currentPage === "index.html" && savedWallet) {
      setStatus("Wallet already connected. Redirecting...", "info");
  
      setTimeout(() => {
        window.location.href = "./dashboard.html";
      }, 2000);
    }
  }
  
  async function registerProperty() {
  
    try {
      const location = document.getElementById("location").value.trim();
      const price = document.getElementById("price").value.trim();
  
      if (!location) {
        setStatus("Please enter a property location.", "error");
        return;
      }
  
      if (!price || isNaN(price) || Number(price) <= 0) {
        setStatus("Please enter a valid price greater than 0.", "error");
        return;
      }
  
      await setupContract();
  
      const tx = await contract.registerProperty(location, price);
      setStatus("Registering property...", "info");
  
      await tx.wait();
  
      setStatus("Property registered successfully.", "success");
  
      document.getElementById("location").value = "";
      document.getElementById("price").value = "";
    } catch (error) {
      console.error("registerProperty error:", error);
      setStatus("Failed to register property.", "error");
    }
  }
  
  async function listProperty() {
  
    try {
      const id = document.getElementById("listId").value.trim();
  
      if (!id || isNaN(id) || Number(id) <= 0) {
        setStatus("Please enter a valid property ID.", "error");
        return;
      }
  
      await setupContract();
  
      const tx = await contract.listProperty(id);
      setStatus("Listing property...", "info");
  
      await tx.wait();
  
      setStatus("Property listed successfully.", "success");
  
      document.getElementById("listId").value = "";
    } catch (error) {
      console.error("listProperty error:", error);
      setStatus("Failed to list property.", "error");
    }
  }
  
  async function buyProperty() {
    try {
      const id = document.getElementById("buyId").value.trim();
      const value = document.getElementById("buyValue").value.trim();
  
      if (!id || isNaN(id) || Number(id) <= 0) {
        setStatus("Please enter a valid property ID.", "error");
        return;
      }
  
      if (!value || isNaN(value) || Number(value) <= 0) {
        setStatus("Please enter a valid payment amount.", "error");
        return;
      }
  
      await setupContract();
  
      const propertyBefore = await contract.getProperty(id);
      const previousOwner = propertyBefore[1];
      const price = propertyBefore[3].toString();
  
      setStatus("Buying property...", "info");
  
      const tx = await contract.buyProperty(id, { value });
      await tx.wait();
  
      const propertyAfter = await contract.getProperty(id);
      const newOwner = propertyAfter[1];
  
      saveSaleCertificateData({
        propertyId: id,
        previousOwner,
        newOwner,
        price,
        txHash: tx.hash,
        timestamp: new Date().toLocaleString()
      });
  
      document.getElementById("buyId").value = "";
      document.getElementById("buyValue").value = "";
  
      setStatus("Property bought successfully.", "success");
    } catch (error) {
      console.error("buyProperty error:", error);
      setStatus("Failed to buy property.", "error");
    }
  }
  
  async function showMyProperties() {
    const container = document.getElementById("myPropertiesContainer");
  
    try {
      await setupContract();
  
      const signerAddress = await signer.getAddress();
      const currentAccount = signerAddress.toLowerCase();
  
      container.innerHTML = "";
  
      const myPropertyIds = await contract.getMyProperties();
  
      if (myPropertyIds.length === 0) {
        container.innerHTML = "<p>No properties found for this wallet.</p>";
        setStatus("Properties loaded successfully.", "success");
        return;
      }
  
      for (let i = 0; i < myPropertyIds.length; i++) {
        const propertyId = Number(myPropertyIds[i]);
        const property = await contract.getProperty(propertyId);
        const owner = property[1];
        const forSale = property[4];
  
        const card = document.createElement("div");
        card.className = "property-card";
  
        let html = `
          <p><strong>Property ID:</strong> ${property[0]}</p>
          <p><strong>Location:</strong> ${property[2]}</p>
          <p><strong>Price (Wei):</strong> ${property[3]}</p>
          <p><strong>For Sale:</strong> ${forSale ? "Yes" : "No"}</p>
          <button onclick="viewHistoryFromCard(${propertyId})">View History</button>
          <div id="history-${propertyId}" class="history-container"></div>
        `;

        const saleCertificate = getSaleCertificateData(propertyId);
        
        if (saleCertificate) {
            html += `
            <button onclick="downloadContractPdf(${propertyId})">
            Download Contract PDF
            </button>
            `;
        }
  
        if (owner.toLowerCase() === currentAccount) {
          html += `
            <input type="number" placeholder="New Price" id="price-${propertyId}" />
            <button onclick="updatePriceFromCard(${propertyId})">Update Price</button>
          `;
  
          if (forSale) {
            html += `
              <button class="unlist-btn" onclick="unlistPropertyFromCard(${propertyId})">
                Unlist Property
              </button>
            `;
          }
        }
  
        card.innerHTML = html;
        container.appendChild(card);
      }
  
      setStatus("Properties loaded successfully.", "success");
    } catch (error) {
      console.error("showMyProperties error:", error);
      setStatus("Failed to load properties.", "error");
    }
  }
  
  function setupSideMenu() {
    const menuToggle = document.getElementById("menuToggle");
    const sideMenu = document.getElementById("sideMenu");
    const overlay = document.getElementById("overlay");
  
    if (menuToggle && sideMenu && overlay) {
      menuToggle.addEventListener("click", () => {
        sideMenu.classList.add("open");
        overlay.classList.add("show");
      });
  
      overlay.addEventListener("click", () => {
        sideMenu.classList.remove("open");
        overlay.classList.remove("show");
      });
    }
  }
  
  function setupProfilePage() {
    const userIdEl = document.getElementById("userId");
    const nicknameInput = document.getElementById("nickname");
    const savedNicknameEl = document.getElementById("savedNickname");
    const saveNicknameBtn = document.getElementById("saveNicknameBtn");
  
    const savedWallet = localStorage.getItem("connectedWallet");
    const savedNickname = localStorage.getItem("nickname");
  
    if (userIdEl && savedWallet) {
      userIdEl.textContent = savedWallet;
    }
  
    if (savedNicknameEl && savedNickname) {
      savedNicknameEl.textContent = savedNickname;
    }
  
    if (nicknameInput && savedNickname) {
      nicknameInput.value = savedNickname;
    }
  
    if (saveNicknameBtn) {
      saveNicknameBtn.addEventListener("click", () => {
        const nickname = nicknameInput.value.trim();
  
        if (nickname) {
          localStorage.setItem("nickname", nickname);
          savedNicknameEl.textContent = nickname;
          setStatus("Nickname saved successfully.", "success");
        } else {
          setStatus("Please enter a valid nickname.", "error");
        }
      });
    }
  }
  
  async function loadMarketplaceProperties() {
    const container = document.getElementById("marketplaceContainer");
  
    try {
      await setupContract();
  
      container.innerHTML = "";
      setStatus("Loading listed properties...", "info");
  
      const total = Number(await contract.propertyCount());
      let found = false;
  
      for (let i = 1; i <= total; i++) {
        const property = await contract.getProperty(i);
  
        const propertyId = property[0];
        const owner = property[1];
        const location = property[2];
        const price = property[3];
        const forSale = property[4];
  
        if (forSale) {
          found = true;
  
          const card = document.createElement("div");
          card.className = "property-card";
          card.innerHTML = `
            <p><strong>Property ID:</strong> ${propertyId}</p>
            <p><strong>Location:</strong> ${location}</p>
            <p><strong>Price (Wei):</strong> ${price}</p>
            <p><strong>Owner:</strong> ${owner}</p>
            <p><strong>Status:</strong> For Sale</p>
          `;
  
          container.appendChild(card);
        }
      }
  
      if (!found) {
        container.innerHTML = "<p>No properties are currently listed for sale.</p>";
      }
  
      setStatus("Marketplace loaded successfully.", "success");
    } catch (error) {
      console.error("loadMarketplaceProperties error:", error);
      setStatus("Failed to load marketplace properties.", "error");
    }
  }
  
  async function switchAccount() {
    try {
      await window.ethereum.request({
        method: "wallet_requestPermissions",
        params: [{ eth_accounts: {} }],
      });
    } catch (error) {
      console.error("Switch account error:", error);
      setStatus("Failed to switch account.", "error");
    }
  }
  
  async function updatePriceFromCard(propertyId) {
    try {
      await setupContract();
  
      const input = document.getElementById(`price-${propertyId}`);
      const newPrice = input.value.trim();
  
      if (!newPrice || isNaN(newPrice) || Number(newPrice) <= 0) {
        setStatus("Please enter a valid new price.", "error");
        return;
      }
  
      const tx = await contract.updatePrice(propertyId, newPrice);
      setStatus("Updating price...", "info");
  
      await tx.wait();
  
      setStatus("Price updated successfully.", "success");
      showMyProperties();
    } catch (error) {
      console.error("updatePriceFromCard error:", error);
      setStatus("Failed to update price.", "error");
    }
  }
  
  async function unlistPropertyFromCard(propertyId) {
    try {
      await setupContract();
  
      const tx = await contract.unlistProperty(propertyId);
      setStatus("Unlisting property...", "info");
  
      await tx.wait();
  
      setStatus("Property unlisted successfully.", "success");
      showMyProperties();
    } catch (error) {
      console.error("unlistPropertyFromCard error:", error);
      setStatus("Failed to unlist property.", "error");
    }
  }
  
  async function viewHistoryFromCard(propertyId) {
    const historyContainer = document.getElementById(`history-${propertyId}`);
  
    try {
      await setupContract();
  
      const history = await contract.getPropertyHistory(propertyId);
  
      if (!historyContainer) return;
  
      if (history.length === 0) {
        historyContainer.innerHTML = "<p>No ownership history found.</p>";
        return;
      }
  
      let html = "<div class='history-box'><p><strong>Ownership History:</strong></p>";
  
      for (let i = 0; i < history.length; i++) {
        html += `<p>${i + 1}. ${history[i]}</p>`;
      }
  
      html += "</div>";
  
      historyContainer.innerHTML = html;
      setStatus("Property history loaded successfully.", "success");
    } catch (error) {
      console.error("viewHistoryFromCard error:", error);
      setStatus("Failed to load property history.", "error");
    }
  }

  function setDashboardTitle() {
    const titleEl = document.getElementById("dashboardTitle");
  
    if (!titleEl) return;
  
    const nickname = localStorage.getItem("nickname");
    const wallet = localStorage.getItem("connectedWallet");
  
    if (nickname) {
      titleEl.textContent = `Hi ${nickname}`;
    } else if (wallet) {
      const shortWallet = wallet.slice(0, 6) + "..." + wallet.slice(-4);
      titleEl.textContent = `Hi ${shortWallet}`;
    } else {
      titleEl.textContent = "Hi";
    }
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    loadSavedWallet();
    setupSideMenu();
    setupProfilePage();
    setDashboardTitle();
  
    const connectWalletBtn = document.getElementById("connectWallet");
    const registerBtn = document.getElementById("registerBtn");
    const listBtn = document.getElementById("listBtn");
    const buyBtn = document.getElementById("buyBtn");
    const loadPropertiesBtn = document.getElementById("loadPropertiesBtn");
    const backHomeBtn = document.getElementById("backHomeBtn");
    const loadMarketplaceBtn = document.getElementById("loadMarketplaceBtn");
    const homeLink = document.getElementById("homeLink");
  
    if (connectWalletBtn) {
      connectWalletBtn.addEventListener("click", connectWallet);
    }
  
    if (registerBtn) {
      registerBtn.addEventListener("click", registerProperty);
    }
  
    if (listBtn) {
      listBtn.addEventListener("click", listProperty);
    }
  
    if (buyBtn) {
      buyBtn.addEventListener("click", buyProperty);
    }
  
    if (loadPropertiesBtn) {
      loadPropertiesBtn.addEventListener("click", showMyProperties);
    }
  
    if (loadMarketplaceBtn) {
      loadMarketplaceBtn.addEventListener("click", loadMarketplaceProperties);
    }
  
    if (backHomeBtn) {
      backHomeBtn.addEventListener("click", () => {
        localStorage.removeItem("connectedWallet");
        window.location.href = "index.html";
      });
    }


  
    window.ethereum.on("accountsChanged", function (accounts) {
        const newAccount = accounts[0];
      
        console.log("Account changed:", newAccount);
      
        localStorage.setItem("connectedWallet", newAccount);
      
        localStorage.removeItem("nickname");
      
        const walletEl = document.getElementById("walletAddress");
        if (walletEl) {
          walletEl.textContent = "Wallet: " + newAccount;
        }
      
        location.reload();
      });
    
    if (homeLink) {
        homeLink.addEventListener("click", (e) => {
            e.preventDefault();
            localStorage.removeItem("connectedWallet");
            window.location.href = "index.html";
        });
    }
  });

  async function checkCorrectNetwork() {
    if (!window.ethereum) return false;
  
    const chainId = await window.ethereum.request({ method: "eth_chainId" });
  
    if (chainId !== 11155111) {
      setStatus("Please switch MetaMask to Sepolia Test Network.", "error");
      return false;
    }
  
    return true;
  }

  function getSaleCertificateData(propertyId) {
    const key = `saleCertificate_${propertyId}`;
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : null;
  }
  
  function saveSaleCertificateData(data) {
    const key = `saleCertificate_${data.propertyId}`;
    localStorage.setItem(key, JSON.stringify(data));
  }
  
  function downloadContractPdf(propertyId) {
    const saleData = getSaleCertificateData(propertyId);
  
    if (!saleData) {
      setStatus("No sale certificate data found for this property.", "error");
      return;
    }
  
    generateSaleCertificate(saleData);
  }

  function loadImageAsDataURL(src) {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.crossOrigin = "Anonymous";
  
      img.onload = function () {
        const canvas = document.createElement("canvas");
        canvas.width = img.width;
        canvas.height = img.height;
  
        const ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0);
  
        resolve(canvas.toDataURL("image/png"));
      };
  
      img.onerror = reject;
      img.src = src;
    });
  }
  
  async function generateSaleCertificate({
    propertyId,
    previousOwner,
    newOwner,
    price,
    txHash,
    timestamp
  }) {
    if (!window.jspdf) {
      setStatus("PDF library not loaded.", "error");
      return;
    }
  
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
  
    const logoData = await loadImageAsDataURL("logo.png");
    const signatureData = await loadImageAsDataURL("signature.png");
    const stampData = await loadImageAsDataURL("stamp.png");
  
    function shortAddress(addr) {
      return addr.slice(0, 6) + "..." + addr.slice(-4);
    }
  
    // Outer border
    doc.setDrawColor(60, 60, 60);
    doc.setLineWidth(0.8);
    doc.rect(10, 10, 190, 277);
  
    // Inner border
    doc.setLineWidth(0.2);
    doc.rect(14, 14, 182, 269);
  
    // Logo
    doc.addImage(logoData, "PNG", 85, 7, 40, 40);
  
    // Title
    doc.setFont("helvetica", "bold");
    doc.setFontSize(20);
    doc.text("PROPERTY SALE CERTIFICATE", 105, 45, { align: "center" });
  
    // Line under title
    doc.setLineWidth(0.5);
    doc.line(20, 52, 190, 52);
  
    // Section heading
    doc.setFontSize(12);
    doc.setFont("helvetica", "bold");
    doc.text("Transaction Details", 20, 64);
  
    // Details
    doc.setFont("helvetica", "normal");
    doc.text(`Property ID: ${propertyId}`, 20, 75);
    doc.text(`Previous Owner: ${shortAddress(previousOwner)}`, 20, 85);
    doc.text(`New Owner: ${shortAddress(newOwner)}`, 20, 95);
    doc.text(`Sale Price (Wei): ${price}`, 20, 105);
  
    doc.text("Transaction Hash:", 20, 118);
    doc.setFontSize(10);
    doc.text(txHash, 20, 126, { maxWidth: 165 });
  
    doc.setFontSize(12);
    doc.text(`Date/Time: ${timestamp}`, 20, 142);
  
    // Authorization section
    doc.setFont("helvetica", "bold");
    doc.text("Authorization", 20, 160);
  
    doc.setFont("helvetica", "normal");
    doc.text(platformOwnerName, 20, 172);
    doc.text(platformOwnerTitle, 20, 180);
  
    // Signature line + signature
    doc.setLineWidth(0.3);
    doc.line(20, 215, 80, 215);
    doc.addImage(signatureData, "PNG", 20, 188, 60, 20);
  
    doc.setFont("times", "italic");
    doc.setFontSize(10);
    doc.text("Authorized Signature", 20, 221);
  
    // Stamp on right
    doc.addImage(stampData, "PNG", 142, 176, 45, 45);
  
    // Verification note
    doc.setFont("helvetica", "italic");
    doc.setFontSize(9);
    doc.text(
      "This certificate is generated from blockchain transaction data. Authenticity should be verified using the transaction hash and on-chain records.",
      20,
      255,
      { maxWidth: 165 }
    );
  
    // Footer label
    doc.setFont("helvetica", "bold");
    doc.setFontSize(9);
    doc.text("BlockEstate Official Certificate", 105, 272, { align: "center" });
  
    doc.save(`sale-certificate-property-${propertyId}.pdf`);
  }