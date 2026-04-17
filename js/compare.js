const PRODUCTS = [
  {
    id: "macbook-pro-14",
    name: "MacBook Pro 14",
    category: "laptop",
    price: 7499,
    img: "../images/products/macpro.jpg",
    specs: {
      Processor: "Apple M3 Pro (11-core CPU, 14-core GPU)",
      Display: '14.2" Liquid Retina XDR, 3024×1964',
      RAM: "18GB Unified Memory",
      Storage: "512GB SSD",
      Battery: "Up to 18 hours",
      Weight: "1.61 kg",
      Ports: "3x Thunderbolt 4, HDMI, SD Card, MagSafe 3",
      OS: "macOS Sonoma"
    }
  },
  {
    id: "iphone-15-pro",
    name: "iPhone 15 Pro",
    category: "phone",
    price: 4299,
    img: "../images/products/iphone15.jpg",
    specs: {
      Processor: "Apple A17 Pro",
      Display: '6.1" Super Retina XDR, 2556×1179',
      RAM: "8GB",
      Storage: "128GB – 1TB",
      "Main Camera": "48MP Main + 12MP Ultra Wide + 12MP 3x Telephoto",
      "Front Camera": "12MP TrueDepth",
      Battery: "3274 mAh, up to 23h video",
      Build: "Titanium frame, Ceramic Shield",
      Connectivity: "5G, Wi-Fi 6E, Bluetooth 5.3, USB-C",
      Biometrics: "Face ID",
      OS: "iOS 17"
    }
  },
  {
    id: "samsung-s24-ultra",
    name: "Samsung Galaxy S24 Ultra",
    category: "phone",
    price: 4899,
    img: "../images/products/s24u.jpg",
    specs: {
      Processor: "Snapdragon 8 Gen 3",
      Display: '6.8" Dynamic AMOLED 2X, 3088×1440, 120Hz',
      RAM: "12GB",
      Storage: "256GB – 1TB",
      "Main Camera": "200MP Main + 12MP Ultra Wide + 50MP 5x + 10MP 3x",
      "Front Camera": "12MP",
      Battery: "5000 mAh, 45W fast charge",
      Build: "Titanium frame, Gorilla Glass Armor",
      Connectivity: "5G, Wi-Fi 7, Bluetooth 5.3, USB-C 3.2",
      Biometrics: "Fingerprint + Face",
      "S Pen": "Built-in with AI features",
      OS: "Android 14 / One UI 6.1"
    }
  },
  {
    id: "ipad-air-m2",
    name: "iPad Air M2",
    category: "tablet",
    price: 2699,
    img: "../images/products/ipadair.jpg",
    specs: {
      Processor: "Apple M2",
      Display: '11" or 13" Liquid Retina, 2360×1640',
      Storage: "128GB – 1TB",
      "Main Camera": "12MP Wide",
      "Front Camera": "12MP Ultra Wide, Center Stage",
      Battery: "Up to 10 hours",
      Connectivity: "Wi-Fi 6E, Bluetooth 5.3, USB-C",
      Biometrics: "Touch ID",
      "Apple Pencil": "Apple Pencil Pro support",
      OS: "iPadOS 17"
    }
  },
  {
    id: "sony-wh1000xm5",
    name: "Sony WH-1000XM5",
    category: "accessory",
    price: 1250,
    img: "../images/products/sonyh.jpg",
    specs: {
      Driver: "30mm, Dome type",
      ANC: "8 microphones, HD Noise Cancelling Processor QN1",
      Battery: "Up to 30 hours (ANC on)",
      Charging: "USB-C, 3min = 3h playback",
      Connectivity: "Bluetooth 5.2, 3.5mm jack",
      Codecs: "SBC, AAC, LDAC",
      Weight: "250g"
    }
  },
  {
    id: "dell-xps-13",
    name: "Dell XPS 13",
    category: "laptop",
    price: 5400,
    img: "../images/products/dellxps.jpg",
    specs: {
      Processor: "Intel Core Ultra 7 155H",
      Display: '13.4" OLED, 2880×1800, Touch',
      RAM: "16GB LPDDR5x",
      Storage: "512GB NVMe SSD",
      GPU: "Intel Arc Graphics",
      Battery: "Up to 12 hours",
      Weight: "1.17 kg",
      Ports: "2x Thunderbolt 4, USB-A, microSD",
      Webcam: "2MP IR Camera with Windows Hello",
      OS: "Windows 11 Pro"
    }
  },
  {
    id: "apple-watch-s9",
    name: "Apple Watch Series 9",
    category: "accessory",
    price: 1750,
    img: "../images/products/watch9.jpg",
    specs: {
      Processor: "Apple S9 SiP",
      Display: "Always-On Retina LTPO OLED, 2000 nits",
      "Health Sensors": "Heart rate, ECG, Blood Oxygen, Temperature",
      "Water Resistance": "50 meters (WR50)",
      Battery: "18 hours (up to 36h Low Power)",
      Connectivity: "LTE/UMTS, Wi-Fi, Bluetooth 5.3, UWB",
      Weight: "51.5g (45mm)",
      OS: "watchOS 10"
    }
  },
  {
    id: "logitech-mx-master",
    name: "Logitech MX Master 3S",
    category: "accessory",
    price: 420,
    img: "../images/products/logimouse.jpg",
    specs: {
      Sensor: "8000 DPI MagSpeed Electromagnetic",
      Battery: "Up to 70 days, USB-C charge",
      Connectivity: "Bluetooth, Logi Bolt USB Receiver",
      Compatibility: "Windows, macOS, Linux, iPadOS",
      Weight: "141g"
    }
  },
  {
    id: "hp-spectre-x360",
    name: "HP Spectre x360",
    category: "laptop",
    price: 4900,
    img: "../images/products/hpspectre.jpg",
    specs: {
      Processor: "Intel Core Ultra 7 155H",
      Display: '14" 2.8K OLED Touch, 120Hz',
      RAM: "16GB LPDDR5x",
      Storage: "1TB NVMe SSD",
      GPU: "Intel Arc Graphics",
      Battery: "Up to 17 hours",
      Weight: "1.57 kg",
      Design: "360° hinge, 2-in-1 convertible",
      Ports: "2x Thunderbolt 4, USB-A, microSD, HDMI",
      OS: "Windows 11 Home"
    }
  },
  {
    id: "google-pixel-8-pro",
    name: "Google Pixel 8 Pro",
    category: "phone",
    price: 3200,
    img: "../images/products/pixel8.jpg",
    specs: {
      Processor: "Google Tensor G3",
      Display: '6.7" LTPO OLED, 2992×1344, 1-120Hz',
      RAM: "12GB",
      Storage: "128GB – 1TB",
      "Main Camera": "50MP Main + 48MP Ultra Wide + 48MP 5x Telephoto",
      "Front Camera": "10.5MP",
      Battery: "5050 mAh, 30W wired / 23W wireless",
      Build: "Polished aluminum, Gorilla Glass Victus 2",
      Connectivity: "5G, Wi-Fi 7, Bluetooth 5.3, USB-C 3.2",
      Biometrics: "In-display fingerprint, Face Unlock",
      OS: "Android 14 (7 years updates)"
    }
  },
  {
    id: "airpods-pro-2",
    name: "AirPods Pro (2nd Gen)",
    category: "accessory",
    price: 940,
    img: "../images/products/airpods.jpg",
    specs: {
      Processor: "Apple H2",
      ANC: "Up to 2x better noise cancellation",
      Battery: "6h ANC / 30h with case",
      Charging: "MagSafe / Lightning / USB-C",
      Connectivity: "Bluetooth 5.3",
      "Water Resistance": "IPX4 (earbuds + case)",
      "Spatial Audio": "Personalized + Dynamic Head Tracking"
    }
  },
  {
    id: "surface-pro-9",
    name: "Microsoft Surface Pro 9",
    category: "laptop",
    price: 3800,
    img: "../images/products/surface.jpg",
    specs: {
      Processor: "Intel Core i7-1255U",
      Display: '13" PixelSense Flow, 2880×1920, 120Hz',
      RAM: "16GB LPDDR5",
      Storage: "256GB SSD",
      GPU: "Intel Iris Xe",
      Battery: "Up to 15.5 hours",
      Weight: "879g (without keyboard)",
      Design: "Detachable keyboard, kickstand",
      Ports: "2x Thunderbolt 4, Surface Connect",
      OS: "Windows 11 Home"
    }
  }
];

const NUM_SLOTS = 3;
let selected = [null, null, null];

function previewHTML(product, index) {
  if (!product) return "";

  return `
    <img class="slot-thumb" src="${product.img}" alt="${product.name}" onerror="this.style.background='var(--gray-200)'">
    <div>
      <div class="slot-name">${product.name}</div>
      <div class="slot-price">$${product.price.toLocaleString()}</div>
    </div>
    <button class="slot-remove" data-clear-index="${index}" title="Remove" type="button">
      <i class="fa-solid fa-xmark"></i>
    </button>
  `;
}

function selectProduct(slotIndex, productId) {
  selected[slotIndex] = productId || null;
  init();
}

function clearSlot(slotIndex) {
  selected[slotIndex] = null;
  init();
}

function renderTable() {
  const active = selected.filter(Boolean).map((id) => PRODUCTS.find((p) => p.id === id));
  const table = document.getElementById("compareTable");
  const empty = document.getElementById("emptyState");

  if (active.length < 2) {
    table.style.display = "none";
    empty.style.display = "";
    return;
  }

  empty.style.display = "none";
  table.style.display = "";

  const headerRow = document.getElementById("headerRow");
  headerRow.innerHTML =
    `<th class="label-col"></th>` +
    active
      .map(
        (p) => `
        <th style="padding:0 0.5rem 1.5rem;">
          <div class="product-col-header">
            <img src="${p.img}" alt="${p.name}" onerror="this.style.background='var(--gray-200)'">
            <div class="col-name">${p.name}</div>
            <div class="col-price">$${p.price.toLocaleString()} <small style="font-weight:300;font-size:0.75rem;">incl. VAT</small></div>
            <div><span class="col-badge badge-${p.category}">${p.category}</span></div>
          </div>
        </th>
      `
      )
      .join("");

  const allKeys = [];
  active.forEach((product) => {
    Object.keys(product.specs).forEach((key) => {
      if (!allKeys.includes(key)) {
        allKeys.push(key);
      }
    });
  });

  const tbody = document.getElementById("tableBody");
  tbody.innerHTML = "";

  const sectionRow = document.createElement("tr");
  sectionRow.className = "section-row";
  sectionRow.innerHTML = `<td colspan="${active.length + 1}"><span>Specifications</span></td>`;
  tbody.appendChild(sectionRow);

  allKeys.forEach((key) => {
    const row = document.createElement("tr");
    row.className = "spec-row";

    const labelCell = `<td class="spec-label label-col">${key}</td>`;
    const valueCells = active
      .map((product) => {
        const value = product.specs[key];
        if (value === undefined || value === null) {
          return `<td class="spec-val" style="color:var(--gray-400);">—</td>`;
        }
        return `<td class="spec-val">${value}</td>`;
      })
      .join("");

    row.innerHTML = labelCell + valueCells;
    tbody.appendChild(row);
  });

  const ctaRow = document.createElement("tr");
  ctaRow.className = "cta-row";
  ctaRow.innerHTML =
    `<td></td>` +
    active
      .map(
        (product) =>
          `<td><a class="btn-compare-buy" href="product.html?id=${product.id}">View Details</a></td>`
      )
      .join("");
  tbody.appendChild(ctaRow);
}

function init() {
  const bar = document.getElementById("selectorBar");
  bar.innerHTML = "";

  for (let i = 0; i < NUM_SLOTS; i++) {
    const slot = document.createElement("div");
    slot.className = "slot-card" + (selected[i] ? " filled" : "");

    slot.innerHTML = `
      <div class="slot-label">Product ${i + 1}</div>
      <select class="slot-select" data-slot-index="${i}">
        <option value="">— Choose a product —</option>
        ${PRODUCTS.map(
          (p) =>
            `<option value="${p.id}" ${selected[i] === p.id ? "selected" : ""}>${p.name} ($${p.price.toLocaleString()})</option>`
        ).join("")}
      </select>
      <div class="slot-preview ${selected[i] ? "show" : ""}" id="preview-${i}">
        ${selected[i] ? previewHTML(PRODUCTS.find((p) => p.id === selected[i]), i) : ""}
      </div>
    `;

    bar.appendChild(slot);
  }

  document.querySelectorAll(".slot-select").forEach((select) => {
    select.addEventListener("change", function () {
      const slotIndex = Number(this.dataset.slotIndex);
      selectProduct(slotIndex, this.value);
    });
  });

  document.querySelectorAll("[data-clear-index]").forEach((button) => {
    button.addEventListener("click", function () {
      const slotIndex = Number(this.dataset.clearIndex);
      clearSlot(slotIndex);
    });
  });

  renderTable();
}

document.addEventListener("DOMContentLoaded", init);

