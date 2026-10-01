const readline = require('readline');

// Interface setup for reading input from terminal
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Helper function to handle async input prompts
const askQuestion = (query) => {
    return new Promise((resolve) => rl.question(query, resolve));
};

// Array to store mobile records (equivalent to std::vector<Mobile>)
const mobiles = [];

/**
 * Add a new mobile record
 */
async function addMobile() {
    console.log("\n========== ADD MOBILE ==========");
    
    const idInput = await askQuestion("Enter Mobile ID: ");
    const mobileId = parseInt(idInput, 10);

    if (isNaN(mobileId)) {
        console.log("Invalid ID format. Operation cancelled.");
        return;
    }

    // Check whether the mobile ID already exists
    const exists = mobiles.some((m) => m.id === mobileId);
    if (exists) {
        console.log("Mobile ID already exists.");
        return;
    }

    const brand = await askQuestion("Enter Brand: ");
    const model = await askQuestion("Enter Model: ");

    // Price input with validation loop
    let price;
    while (true) {
        const priceInput = await askQuestion("Enter Price: ");
        price = parseFloat(priceInput);
        if (!isNaN(price)) break;
        console.log("Invalid price. Enter Price again: ");
    }

    // Quantity input with validation loop
    let quantity;
    while (true) {
        const qtyInput = await askQuestion("Enter Quantity: ");
        quantity = parseInt(qtyInput, 10);
        if (!isNaN(quantity)) break;
        console.log("Invalid quantity. Enter Quantity again: ");
    }

    // Store record as an object
    mobiles.push({
        id: mobileId,
        brand: brand.trim(),
        model: model.trim(),
        price: price,
        quantity: quantity
    });

    console.log("Mobile added successfully.");
}

/**
 * Display all stored mobile records
 */
function displayMobiles() {
    console.log("\n========== MOBILE LIST ==========");
    if (mobiles.length === 0) {
        console.log("No mobile records available.");
        return;
    }

    console.log("-".repeat(75));
    console.log(
        "ID".padEnd(8) +
        "Brand".padEnd(15) +
        "Model".padEnd(20) +
        "Price".padEnd(15) +
        "Quantity".padEnd(10)
    );
    console.log("-".repeat(75));

    for (const mobile of mobiles) {
        const formattedPrice = mobile.price.toFixed(2);
        console.log(
            String(mobile.id).padEnd(8) +
            mobile.brand.padEnd(15) +
            mobile.model.padEnd(20) +
            formattedPrice.padEnd(15) +
            String(mobile.quantity).padEnd(10)
        );
    }
    console.log("-".repeat(75));
}

/**
 * Search for a mobile by ID
 */
async function searchMobile() {
    console.log("\n========== SEARCH MOBILE ==========");
    const idInput = await askQuestion("Enter Mobile ID to search: ");
    const mobileId = parseInt(idInput, 10);

    if (isNaN(mobileId)) {
        console.log("Invalid ID format.");
        return;
    }

    const mobile = mobiles.find((m) => m.id === mobileId);

    if (mobile) {
        console.log("\nMobile Found!");
        console.log(`Mobile ID : ${mobile.id}`);
        console.log(`Brand     : ${mobile.brand}`);
        console.log(`Model     : ${mobile.model}`);
        console.log(`Price     : ${mobile.price.toFixed(2)}`);
        console.log(`Quantity  : ${mobile.quantity}`);
    } else {
        console.log("Mobile not found.");
    }
}

/**
 * Update existing mobile record details
 */
async function updateMobile() {
    console.log("\n========== UPDATE MOBILE ==========");
    const idInput = await askQuestion("Enter Mobile ID to update: ");
    const mobileId = parseInt(idInput, 10);

    if (isNaN(mobileId)) {
        console.log("Invalid ID format.");
        return;
    }

    const mobile = mobiles.find((m) => m.id === mobileId);

    if (!mobile) {
        console.log("Mobile not found.");
        return;
    }

    console.log("\nMobile Found.");
    console.log(`Current Brand   : ${mobile.brand}`);
    console.log(`Current Model   : ${mobile.model}`);
    console.log(`Current Price   : ${mobile.price.toFixed(2)}`);
    console.log(`Current Quantity: ${mobile.quantity}`);

    console.log("\nEnter New Details");
    mobile.brand = (await askQuestion("Enter New Brand: ")).trim();
    mobile.model = (await askQuestion("Enter New Model: ")).trim();

    // Price re-entry
    while (true) {
        const priceInput = await askQuestion("Enter New Price: ");
        const price = parseFloat(priceInput);
        if (!isNaN(price)) {
            mobile.price = price;
            break;
        }
        console.log("Invalid price. Enter New Price again: ");
    }

    // Quantity re-entry
    while (true) {
        const qtyInput = await askQuestion("Enter New Quantity: ");
        const quantity = parseInt(qtyInput, 10);
        if (!isNaN(quantity)) {
            mobile.quantity = quantity;
            break;
        }
        console.log("Invalid quantity. Enter New Quantity again: ");
    }

    console.log("Mobile updated successfully.");
}

/**
 * Delete a mobile record by ID
 */
async function deleteMobile() {
    console.log("\n========== DELETE MOBILE ==========");
    const idInput = await askQuestion("Enter Mobile ID to delete: ");
    const mobileId = parseInt(idInput, 10);

    if (isNaN(mobileId)) {
        console.log("Invalid ID format.");
        return;
    }

    const index = mobiles.findIndex((m) => m.id === mobileId);

    if (index !== -1) {
        const mobile = mobiles[index];
        console.log("\nMobile Found.");
        console.log(`Brand: ${mobile.brand}`);
        console.log(`Model: ${mobile.model}`);

        const choice = await askQuestion("Do you want to delete this mobile? (Y/N): ");

        if (choice.trim().toUpperCase() === 'Y') {
            mobiles.splice(index, 1);
            console.log("Mobile deleted successfully.");
        } else {
            console.log("Delete operation cancelled.");
        }
    } else {
        console.log("Mobile not found.");
    }
}

/**
 * Main dashboard loop
 */
async function dashboard() {
    while (true) {
        console.log("\n" + "=".repeat(45));
        console.log("        MOBILE SHOP MANAGEMENT");
        console.log("=".repeat(45));
        console.log("1. Add Mobile");
        console.log("2. Display All Mobiles");
        console.log("3. Search Mobile");
        console.log("4. Update Mobile");
        console.log("5. Delete Mobile");
        console.log("6. Exit");
        console.log("=".repeat(45));

        const choiceInput = await askQuestion("Enter your choice: ");
        const choice = parseInt(choiceInput, 10);

        if (isNaN(choice)) {
            console.log("Invalid choice. Please enter a valid option number.");
            continue;
        }

        switch (choice) {
            case 1:
                await addMobile();
                break;
            case 2:
                displayMobiles();
                break;
            case 3:
                await searchMobile();
                break;
            case 4:
                await updateMobile();
                break;
            case 5:
                await deleteMobile();
                break;
            case 6:
                console.log("\nThank you for using Mobile Shop Management.");
                rl.close();
                return;
            default:
                console.log("Invalid choice. Please try again.");
        }
    }
}

// Start application
dashboard();