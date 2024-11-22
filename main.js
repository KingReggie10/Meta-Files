// Step 1:
let nfts = [];

// Step 2:
function mintNFT(name, creator, description) {
    // Create an NFT object with metadata
    const nft = {
        name: name,
        creator: creator,
        description: description
    };
    
    // Store the NFT in the nfts array
    nfts.push(nft);
}

// Step 3:
function listNFTs() {
    for (let i = 0; i < nfts.length; i++) {
        console.log("Name: " + nfts[i].name);
        console.log("Creator: " + nfts[i].creator);
        console.log("Description: " + nfts[i].description);
        console.log("-----------------------");
    }
}

// Step 4
function getTotalSupply() {
    return nfts.length;
}

// Call your functions below this line
mintNFT("Space Molly", "Kenny Wong", "A Wondering Baby Astronaut.");

mintNFT("Smiski", "Dream Inc.", "Glow in the darkest of night guy.");

mintNFT("Labubu", "Kasing Lung", "Furry Fluffy fanged little guy");

mintNFT("Sonny Angels", "Toru Soeya", "A cute little naked angel.");

mintNFT("Hirono", "Lang", "A vast representation of life by a little guy");

mintNFT("Skull Panda", "Xiongmiao", "A Space lady with a variant of stylish looks.");

listNFTs(); // Print all NFTs
console.log("Total Supply: " + getTotalSupply()); // Print total number of NFTs