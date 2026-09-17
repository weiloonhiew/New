/* ============================================================
   Interior Design Quotation Builder — data
   Catalog costs are grounded in real 2021-2025 subcontractor/
   supplier price lists supplied by the user, plus median costs
   extracted from 8 of the user's own past renovation contracts
   (ICON INTERIOR DESIGN PTE LTD). All costs below are COST PRICE
   (what the designer pays); the app applies the markup to get the
   client-facing Selling Price, matching the 25% markup used
   consistently across the user's own past contracts.
   ============================================================ */

const DEFAULT_MARKUP = 0.25;
const DEFAULT_GST = 0.09;

/* ---------------- Company / document boilerplate ----------------
   Wording taken verbatim from the user's own "Renovation Contract"
   documents (ICON INTERIOR DESIGN PTE LTD), with only project-
   specific values (contract no, client, address) removed. Two
   small typos in the source files were corrected: "Premilinaries"
   -> "Preliminaries" and "Miscellanoues" -> "Miscellaneous". */
const COMPANY = {
  name: "ICON INTERIOR DESIGN PTE LTD",
  legalName: "Icon Interior Design Private Limited",
  addressLine: "Showroom: No. 441 Macpherson Road Singapore 368152",
  telFax: "Tel: 62851817 (3 Lines) | Fax: 62852090",
  website: "WEBSITE: iconinterior.com.sg",
  regGst: "Registration No. 200915888R | GST Registration No. GST200915888R",
  bankNote: [
    "Cash Payment Are Not Encourage By Our Company.",
    "All cheques should be crossed and made payable to \"ICON INTERIOR DESIGN PTE LTD\".",
    "All Internet Banking/ATM Transfers MUST be made only to Icon Interior Design Pte Ltd's OCBC Account No: 629024548001.",
    "All scan to pay using QR code or using UEN code: 200915888R MUST be made only to \"ICON INTERIOR DESIGN PTE LTD\"."
  ]
};

const DOC_TITLE_DEFAULT = "Renovation Contract";

const INTRO_LINE = (companyName) =>
  `We Confirm our renovation order to be undertaken by ${companyName.toUpperCase()} as per particular listed hereunder:-`;

const PAYMENT_TERMS = [
  "10% Of Total Contract Amount Upon Confirmation of Awarded Contract Agreement / Commencement of Designing Works.",
  "40% Of Total Contract Amount Upon Commencement of Any Renovation Works. (80% For Single Item Renovation Works)",
  "45% Of Total Contract Amount Upon Measurement And Confirming of Carpentry / Completion of Masonry Works.",
  "5% Of Total Contract Amount Upon Completion For Renovation Works."
];

/* Verbatim from the user's own contract, clauses 1-20. */
const TERMS_AND_CONDITIONS = [
  "This contract is valid for 180 days only from the date of this contract.",
  "Deposit is not refundable under any circumstance. In the event of cancellation of contract by the customer, a compensation amounting to 20% of the contract sum is payable to the company.",
  "If customers are applying for Bank Renovation Loan to settle the full or partial renovation contract amount, our company will only commence the renovation works AFTER receipt of the entire approved loan amount from the customers. The customers are to be fully responsible for any delay in the commencement or continuation of renovation works if the due-to-settle of bank loan cheque is not received by our company within a stipulated time frame.",
  "A first 50% payment of the total contract sum is payable upon the commencement of work or unloading of materials at the unit or in the request by the company.",
  "A second payment of at least 45% of the total contract amount is payable upon completion of the tiling works. If no tiling work is engaged, second payment is payable before the taking of measurement of any carpentry works. The third or final payment will not be more than S$9,999.00 or 5% of the total contract amount whichever is lesser.",
  "A lump sum discount may be offered to customers based on a package deal engaged. However, this lump sum discount will be invalid if the customer makes any cancellation of items or variation of orders from the package deal.",
  "Marble and Granite are natural products and therefore the company will not be liable for absolute uniformity in veins & colours, the illustrations shown in the samples provide an approximate idea of the general appearance for reference purpose only.",
  "Special offer Tiles will not be guaranteed for their Uniformity in colour Tones, size and quality.",
  "Any additional works and services requested by customer not stated as Free of Charge (F.O.C) in the contract, upon completion or partial completion of works, customers are liable to pay full amount at the hand over stage of project even these works and services were done without the endorsement by the customers in any contract with our company.",
  "Any damages done to the concealed elements (such as pipe, wire, etc) during the renovation, the cost of the repair work shall be borne by the house owner.",
  "Any additional and alteration of work and materials not stated in this contract shall be treated as variation order.",
  "Any additional work and alteration of work or design may cause delay to agree completion date might result in extending the handover date.",
  "Water-proofing defects liability: Company will undertake and be responsible for the water proofing work done by us in bathroom and kitchen for a period of 15 months from the date of commencing of work or HDB renovation permit notice commencing date.",
  "Any default in payment, the company reserves the right to stop work immediately and claim the work done.",
  "Retention sum of any form is strictly not applicable to our works.",
  "In the events of default in payment, owner/owners shall indemnify our company for all costs and expenses (including all legal fees) incurred by our company in demanding payment and / or taking legal action against owner/owners for recovery of payment and / or for any breach of the obligation.",
  "Owner hereby undertake not to engage or appoint any other renovation companies, contractors, suppliers, independent workmen or any third party to participate or contribute to the above renovation jobs whether by monetary gains or services rendered privately.",
  "In the event of owner’s self engagement of their independent contractor, suppliers or workmen to carry out other renovation works items apart from the held responsible to any damaged jobs by our company to the premises, our company shall not be held responsible to any damaged job items caused by their self engagement work force.",
  "FOR HDB FLATS, PRIVATE HOUSE AND COMMERCIAL SPACE • Any Renovation Deposit required by the Management of the apartment or building shall be payable by the customer. • Any charges of professional engineer, architect, license plumber, license electrician power grid, SP services, PUB, URA, LTA, MOE, BCA and any Authorities if required, shall be borne by the customer.",
  "The company warrants that the product(s) manufactured, sold, and delivered by the Company to the Customer shall be free from material defects in material and workmanship, conform to applicable specifications, and perform in accordance with the product documentation under normal usage for 12 months from the date of delivery to the Customer."
];

/* ---------------- Section order (verbatim section titles) ---------------- */
const SECTIONS = [
  "Professional Services",
  "Preliminaries Works",
  "Remodeling Works (Hacking Works)",
  "Plumbing Works",
  "Masonry Works",
  "Waterproofing Works",
  "Plasterceil Works",
  "Plastering Works",
  "Painting Works",
  "Glass Works",
  "Aluminium And Steel Works",
  "Carpentry Works",
  "Work And Service Top",
  "Electrical Works",
  "Flooring Works",
  "Aircon Works",
  "Miscellaneous Works"
];

/* ---------------- Price catalog ----------------
   Each item: { d: description, u: unit, c: cost price (S$), n: note (optional), src: source }
   src labels: contractor/supplier the cost is grounded in, shown as a reference
   tooltip in the picker (not printed on the client quotation).           */
const CATALOG = {
  "Professional Services": [
    { d: "Sourcing of qualified Professional Engineer", u: "Lot", c: 0, inc: true },
    { d: "Renovation Loan Banker", u: "Lot", c: 0, inc: true },
    { d: "Provide site measurement for details floor plan", u: "Lot", c: 0, inc: true },
    { d: "Provide furniture layout plan", u: "Lot", c: 0, inc: true },
    { d: "Provide electrical lighting and outlet layout plan", u: "Lot", c: 0, inc: true },
    { d: "Preliminary review and evaluation of sketches", u: "Lot", c: 0, inc: true },
    { d: "Develop design concept including colour schemes, design theme, finishes and materials.", u: "Lot", c: 0, inc: true },
    { d: "Consult on selection of appliances and fixtures", u: "Lot", c: 0, inc: true },
    { d: "Visit various tiles and/or stones vendor's showroom for conceptual plan.", u: "Lot", c: 0, inc: true },
    { d: "Provide forecast completion schedule.", u: "Lot", c: 0, inc: true },
    { d: "Consult on selection of furniture vendors.", u: "Lot", c: 0, inc: true },
    { d: "Draw detailed elevation views for customised furniture and/or carpentry works.", u: "Lot", c: 0, inc: true },
    { d: "Evaluate budget and selections.", u: "Lot", c: 0, inc: true },
    { d: "Provides perspective 3D rendered computer drawings.", u: "Nos", c: 0, inc: true },
    { d: "Interior Design & Project Management Fee", u: "Lot", c: 0, n: "Enter a lump sum if charged separately from renovation works." }
  ],
  "Preliminaries Works": [
    { d: "Purchasing / uplifting of concrete and plaster sand.", u: "Lot", c: 150 },
    { d: "Labour to up-lifting of all building materials and tiles/stones", u: "Lot", c: 350 },
    { d: "Supply paper roll c/w masking tape", u: "Unit", c: 300, src: "ST Construction (Titu) 2024" },
    { d: "Lay corrugated paper roll (labour)", u: "Unit", c: 450, src: "ST Construction (Titu) 2024" },
    { d: "Debris Fees to clear off all debris off site and transport to designated area for disposal.", u: "Lot", c: 350 },
    { d: "Renovation permit application (HDB)", u: "Lot", c: 150 }
  ],
  "Remodeling Works (Hacking Works)": [
    { d: "Dismantle Existing Door & Door Frame (3ft x 7ft)", u: "Nos", c: 35, src: "ST Construction (Titu) 2024" },
    { d: "Dismantle Existing Door Only", u: "Nos", c: 15, src: "ST Construction (Titu) 2024" },
    { d: "Dismantle Existing Door Frame Only", u: "Nos", c: 20, src: "ST Construction (Titu) 2024" },
    { d: "Dismantle and dispose Wardrobe", u: "ft run", c: 25, src: "ST Construction (Titu) 2024" },
    { d: "Dismantle and dispose Kitchen Cabinet", u: "Lot", c: 300, src: "ST Construction (Titu) 2024" },
    { d: "Hack One Bedroom Floor Tiles", u: "Room", c: 500, src: "ST Construction (Titu) 2024" },
    { d: "Hack Kitchen Wall & Floor Tiles (incl. sink/stove support & kitchen cabinet)", u: "Lot", c: 1200, src: "ST Construction (Titu) 2024" },
    { d: "Hack Kitchen Wall Tiles", u: "Lot", c: 650, src: "ST Construction (Titu) 2024" },
    { d: "Hack Kitchen Floor Tiles", u: "Lot", c: 800, src: "ST Construction (Titu) 2024" },
    { d: "Hack Kitchen Floor Tiles and Two Toilets Floor Tiles", u: "Lot", c: 1000, src: "ST Construction (Titu) 2024" },
    { d: "Hack One Toilet Wall Tiles and Floor Tiles", u: "Lot", c: 700, src: "ST Construction (Titu) 2024" },
    { d: "Hack One Toilet Wall Tiles", u: "Lot", c: 500, src: "ST Construction (Titu) 2024" },
    { d: "Hack One Toilet Floor Tiles", u: "Lot", c: 400, src: "ST Construction (Titu) 2024" },
    { d: "Hack Sink and Stove Support", u: "Lot", c: 200, src: "ST Construction (Titu) 2024" },
    { d: "Hack Long Bath", u: "Lot", c: 150, src: "ST Construction (Titu) 2024" },
    { d: "Hack Wall for New Door Opening", u: "Lot", c: 150, src: "ST Construction (Titu) 2024" },
    { d: "Hack Service Balcony Floor Tiles (Small)", u: "Lot", c: 350, src: "ST Construction (Titu) 2024" },
    { d: "Hack Service Balcony Floor Tiles (Big)", u: "Lot", c: 450, src: "ST Construction (Titu) 2024" },
    { d: "Hack Service Balcony Wall Tiles", u: "Lot", c: 400, src: "ST Construction (Titu) 2024" },
    { d: "Demolishing of Wall (Normal hollow block wall only, excl. condo/landed)", u: "ft run", c: 35, src: "ST Construction (Titu) 2024" },
    { d: "Demolishing of Partition Wall", u: "ft run", c: 25, src: "ST Construction (Titu) 2024" },
    { d: "Hack Simple Cornice (living + 3 bedroom)", u: "Lot", c: 200, src: "ST Construction (Titu) 2024" },
    { d: "Hack L-Box (living + 3 bedroom)", u: "Lot", c: 300, src: "ST Construction (Titu) 2024" },
    { d: "Hack Skirting (living + 3 bedroom)", u: "Lot", c: 250, src: "ST Construction (Titu) 2024" },
    { d: "Hack Vinyl/Carpet Flooring (per room)", u: "Room", c: 150, src: "ST Construction (Titu) 2024" },
    { d: "Hack Vinyl/Carpet Flooring (hall)", u: "Hall", c: 250, src: "ST Construction (Titu) 2024" },
    { d: "Hack Parquet Flooring (per room)", u: "Room", c: 250, src: "ST Construction (Titu) 2024", n: "Cement screed hacking billed separately if required." },
    { d: "Remove Wallpaper", u: "ft run", c: 5, src: "ST Construction (Titu) 2024" },
    { d: "Kitchen and 2 Toilets Renovation Package, 3-Room HDB (hack floor/wall tiles, sink/stove support, kitchen cabinet, haulage, debris removal)", u: "Lot", c: 2300, src: "ST Construction (Titu) 2024", n: "4-Room $2600 / 5-Room $3100 / EA $3600 / Maisonette $3800." }
  ],
  "Plumbing Works": [
    { d: "Install Whole House Stainless Steel Pipe (3/4/5-Room Flat)", u: "Lot", c: 900, src: "PH Plumbing (Pin) 2025" },
    { d: "Install Whole House Copper Pipe (3/4/5-Room Flat)", u: "Lot", c: 1075, src: "PH Plumbing (Pin) 2025" },
    { d: "Install Conceal Copper Pipe - Hot & Cold Pipe (3 Point)", u: "Lot", c: 1075, src: "PH Plumbing (Pin) 2025" },
    { d: "Install Both Toilet Hot Point", u: "Lot", c: 375, src: "PH Plumbing (Pin) 2025" },
    { d: "Install & Supply Kitchen Hot Point", u: "Lot", c: 175, src: "PH Plumbing (Pin) 2025" },
    { d: "Additional Conceal Copper Pipe (1 point)", u: "Point", c: 250, src: "PH Plumbing (Pin) 2025" },
    { d: "Install Exposed Hot Pipe for Bath Mixer & Shower Set (2-4 point)", u: "Lot", c: 350, src: "PH Plumbing (Pin) 2025" },
    { d: "Additional Charge for Sink Hot Point", u: "Lot", c: 150, src: "PH Plumbing (Pin) 2025" },
    { d: "Install Instant Water Heater", u: "Nos", c: 65, src: "PH Plumbing (Pin) 2025" },
    { d: "Install Storage Heater", u: "Nos", c: 150, src: "PH Plumbing (Pin) 2025" },
    { d: "Replacement (Conceal) Storage Water Heater", u: "Nos", c: 240, src: "PH Plumbing (Pin) 2025" },
    { d: "Install/Supply BTO HDB Gas Heater Hot Water to Toilet", u: "Lot", c: 325, src: "PH Plumbing (Pin) 2025" },
    { d: "Install Toilet Bowl", u: "Nos", c: 100, src: "PH Plumbing (Pin) 2025", n: "Dismantle fee $20-$40 extra if applicable." },
    { d: "Install Squatting Pan", u: "Nos", c: 190, src: "PH Plumbing (Pin) 2025" },
    { d: "Install Squatting Pan to Sitting Pan", u: "Nos", c: 275, src: "PH Plumbing (Pin) 2025" },
    { d: "Install Spray Rinser (w/o supply valve)", u: "Nos", c: 40, src: "PH Plumbing (Pin) 2025" },
    { d: "Install Bathtub", u: "Nos", c: 175, src: "PH Plumbing (Pin) 2025" },
    { d: "Install Bathtub with Jacuzzi", u: "Nos", c: 215, src: "PH Plumbing (Pin) 2025" },
    { d: "Install Bathroom Accessories", u: "Set", c: 55, src: "PH Plumbing (Pin) 2025" },
    { d: "Connection of Sink In/Outlet Pipe (excl. bottle trap)", u: "Nos", c: 115, src: "PH Plumbing (Pin) 2025" },
    { d: "Relocate Sink Pipe and Connection of Sink", u: "Nos", c: 215, src: "PH Plumbing (Pin) 2025" },
    { d: "Install/Supply Inlet Pipe for Washing Machine Tap", u: "Nos", c: 115, src: "PH Plumbing (Pin) 2025" },
    { d: "Clear Toilet Bowl Choke", u: "Nos", c: 175, src: "PH Plumbing (Pin) 2025" },
    { d: "Clear Floor Trap Choke", u: "Nos", c: 125, src: "PH Plumbing (Pin) 2025" },
    { d: "Install Basin With Tap (excl. stop valve)", u: "Nos", c: 80, src: "PH Plumbing (Pin) 2025" },
    { d: "Install Basin with Cabinet (excl. stop valve)", u: "Nos", c: 150, src: "PH Plumbing (Pin) 2025" },
    { d: "Replace Kitchen Sink Tap / Basin Tap (excl. stop valve)", u: "Nos", c: 70, src: "PH Plumbing (Pin) 2025" },
    { d: "Supply / Replace Bottle Trap for Sink / Basin", u: "Nos", c: 70, src: "PH Plumbing (Pin) 2025" },
    { d: "Dismantle Toilet Fittings", u: "Lot", c: 115, src: "PH Plumbing (Pin) 2025" },
    { d: "Endorsement & Submission for Portable Water Pipe (HDB & Condo)", u: "Lot", c: 400, src: "PH Plumbing (Pin) 2025" },
    { d: "PUB Submission for Application of Water Sub-Meter / Relocation of PUB Water Sub-Meter", u: "Lot", c: 600, src: "PH Plumbing (Pin) 2025" }
  ],
  "Masonry Works": [
    { d: "Construct 50mm height of mortar Plinth/Kerb with screed surface and/or tile finishing", u: "Nos", c: 150 },
    { d: "Erect Low Height Hollow Block Wall (below shower screen) in tiles finish", u: "Nos", c: 400 },
    { d: "Erect Low Height Hollow Block Wall in tiles finish (1 meter height)", u: "Nos", c: 450 },
    { d: "Overlay Tiles for Kitchen cabinet backing in tiles finish", u: "Lot", c: 450 },
    { d: "Supply and lay floor/wall tiles, standard (≤$4/pc before GST)", u: "sqft", c: 12 },
    { d: "Supply and lay floor/wall tiles, premium", u: "sqft", c: 18 }
  ],
  "Waterproofing Works": [
    { d: "Waterproofing membrane - bathroom floor & wall (incl. water ponding test)", u: "Lot", c: 400 },
    { d: "Waterproofing membrane - kitchen / service yard", u: "Lot", c: 300 },
    { d: "Water ponding test", u: "Lot", c: 100 }
  ],
  "Plasterceil Works": [
    { d: "False Ceiling (not exceeding 3m) - Normal HDB", u: "sqft", c: 2.60, src: "GEM Interior Decoration 2023" },
    { d: "False Ceiling (not exceeding 3m) - Condominium", u: "sqft", c: 2.80, src: "GEM Interior Decoration 2023" },
    { d: "False Ceiling (not exceeding 3m) - Commercial Property", u: "sqft", c: 3.00, src: "GEM Interior Decoration 2023" },
    { d: "Partition (1 sided)", u: "sqft", c: 3.00, src: "GEM Interior Decoration 2023" },
    { d: "Partition (2 sided)", u: "sqft", c: 3.50, src: "GEM Interior Decoration 2023" },
    { d: "Additional rockwool 40kg", u: "sqft", c: 1.20, src: "GEM Interior Decoration 2023" },
    { d: "Additional rockwool 60kg", u: "sqft", c: 1.50, src: "GEM Interior Decoration 2023" },
    { d: "Additional rockwool 80kg", u: "sqft", c: 2.00, src: "GEM Interior Decoration 2023" },
    { d: "L Box (4x12 ; 6x12)", u: "ft run", c: 6.50, src: "GEM Interior Decoration 2023" },
    { d: "L Box (4x18 ; 6x18)", u: "ft run", c: 7.50, src: "GEM Interior Decoration 2023" },
    { d: "Cove Light", u: "ft run", c: 8.50, src: "GEM Interior Decoration 2023" },
    { d: "Curtain Pelmet", u: "ft run", c: 12.00, src: "GEM Interior Decoration 2023", n: "Ranges $9-$15/ft depending on design." },
    { d: "Cornice", u: "ft run", c: 4.00, src: "GEM Interior Decoration 2023" },
    { d: "U Box Normal", u: "ft run", c: 14.00, src: "GEM Interior Decoration 2023" },
    { d: "Air-con Pelmet", u: "Unit", c: 60.00, src: "GEM Interior Decoration 2023" },
    { d: "Access Panel, 300mm - 600mm", u: "Unit", c: 60.00, src: "GEM Interior Decoration 2023" },
    { d: "Toilet Ceiling and Access Panel", u: "Set", c: 200.00, src: "GEM Interior Decoration 2023" },
    { d: "Calcium Silicate Box Up Toilet Drain Pipe", u: "Set", c: 325.00, src: "GEM Interior Decoration 2023", n: "Ranges $250-$400/set." },
    { d: "Add wooden support for lighting & fan", u: "Pcs", c: 30.00, src: "GEM Interior Decoration 2023" },
    { d: "Calcium Silicate Board 9mm thick (1 sided)", u: "sqft", c: 7.50, src: "GEM Interior Decoration 2023" }
  ],
  "Plastering Works": [
    { d: "Plaster Whole House Wall & Ceiling (excl. kitchen wall & scaffold), HDB 3 Room", u: "Lot", c: 2000, n: "HDB 4-Room $2,400 / 5-Room $2,800 / Exec Apt $3,200 / Exec Maisonette $3,800 (excl. balcony)." },
    { d: "Plaster Whole House Wall & Ceiling (excl. kitchen wall & scaffold), HDB 4 Room", u: "Lot", c: 2400 },
    { d: "Plaster Whole House Wall & Ceiling (excl. kitchen wall & scaffold), HDB 5 Room", u: "Lot", c: 2800 },
    { d: "Plaster Whole House Wall & Ceiling, Condo (3 Room / 2 Bedder)", u: "Lot", c: 2000, n: "Onwards - final price depends on layout." },
    { d: "Plaster Bedroom Wall & Living (no ceiling), HDB 3 Room", u: "Lot", c: 1400, n: "HDB 4-Room $1,700 / 5-Room $2,000 / Exec Apt $2,300 / Exec Maisonette $3,100 (excl. balcony)." },
    { d: "Plaster Bedroom Wall & Living (no ceiling), HDB 4 Room", u: "Lot", c: 1700 },
    { d: "Plaster Bedroom Wall & Living (no ceiling), HDB 5 Room", u: "Lot", c: 2000 }
  ],
  "Painting Works": [
    { d: "Apply Sealer/Primer for interior wall and ceiling, whole house", u: "Lot", c: 350, src: "Rainbow Palette" },
    { d: "Paint interior wall and ceiling (Nippon Vinilex 5000, 5+1 colours, ceiling matex white), 3-Room HDB", u: "Lot", c: 1000, src: "Rainbow Palette", n: "4-Room $1,300 / 5-Room $1,500." },
    { d: "Paint interior wall and ceiling (Nippon Vinilex 5000, 5+1 colours, ceiling matex white), 4-Room HDB", u: "Lot", c: 1300, src: "Rainbow Palette" },
    { d: "Paint interior wall and ceiling (Nippon Vinilex 5000, 5+1 colours, ceiling matex white), 5-Room HDB", u: "Lot", c: 1500, src: "Rainbow Palette" },
    { d: "Paint interior wall and ceiling, Standard Package, 4-Room HDB", u: "Lot", c: 1200, n: "Classic Package $1,400 / Premium Package $1,600 for same unit size." },
    { d: "Paint interior wall and ceiling, Classic Package (Easy Wash / 3-in-1 Medifresh / Odourless / MozzieGuard), 4-Room HDB", u: "Lot", c: 1400 },
    { d: "Paint interior wall and ceiling, Premium Package (O-less Medifresh / O-less Easywash), 4-Room HDB", u: "Lot", c: 1600 },
    { d: "Door frame touch-up / paint", u: "Nos", c: 20, src: "Rainbow Palette" },
    { d: "Door paint", u: "Nos", c: 50, src: "Rainbow Palette" },
    { d: "Bomb shelter door with frame, paint", u: "Set", c: 80, src: "Rainbow Palette" },
    { d: "Toilet pipe painting (1 pipe)", u: "Lot", c: 70, src: "Rainbow Palette" },
    { d: "Toilet pipe painting (2 pipes)", u: "Lot", c: 120, src: "Rainbow Palette" }
  ],
  "Glass Works": [
    { d: "Shower Screen, 10mm Clear Tempered Glass, Wall to Glass Hinges, Straight Type", u: "Set", c: 315.00, src: "Unique Glass 2022" },
    { d: "Shower Screen, 10mm Clear Tempered Glass, Glass to Glass Hinges, L-Shape", u: "Set", c: 420.00, src: "Unique Glass 2022" },
    { d: "Shower Screen (Sliding), 10mm Clear Tempered Glass, Wall to Wall, Straight Type", u: "Set", c: 441.00, src: "Unique Glass 2022" },
    { d: "Shower Screen (Sliding), 10mm Clear Tempered Glass, L-Shape", u: "Set", c: 546.00, src: "Unique Glass 2022" },
    { d: "Round Corner Sliding Shower Screen, 8mm Clear Tempered Glass, Standard Size", u: "Set", c: 945.00, src: "Unique Glass 2022" },
    { d: "Toilet or Kitchen Entrance Swing Door, 10mm Clear Tempered Glass, Hinges Door", u: "Set", c: 399.00, src: "Unique Glass 2022" },
    { d: "Bi-fold Door, Clear Tempered Glass, 10mm", u: "Set", c: 682.50, src: "Unique Glass 2022" },
    { d: "One Way Mirror, 6mm", u: "sqft", c: 22.00, src: "Unique Glass 2022" },
    { d: "Clear Mirror, 5mm, Flat Polish", u: "sqft", c: 8.40, src: "Unique Glass 2022" },
    { d: "Tinted Mirror, 5mm, Bronze", u: "sqft", c: 12.40, src: "Unique Glass 2022" },
    { d: "Float Glass, 6mm, Clear Float", u: "sqft", c: 7.10, src: "Unique Glass 2022" },
    { d: "Float Glass, 6mm, Tempered", u: "sqft", c: 8.80, src: "Unique Glass 2022" },
    { d: "Float Glass, 10mm, Tempered", u: "sqft", c: 10.30, src: "Unique Glass 2022" },
    { d: "Change Shower Screen Wall to Glass Hinge", u: "Set", c: 132.30, src: "Unique Glass 2022" },
    { d: "Change Swing Door Wall to Glass Hinge", u: "Set", c: 132.30, src: "Unique Glass 2022" },
    { d: "Change Normal Floor Spring", u: "Set", c: 315.00, src: "Unique Glass 2022" },
    { d: "Change Door Latch Lockset", u: "Set", c: 94.50, src: "Unique Glass 2022" },
    { d: "Change Door Key Lockset", u: "Set", c: 157.50, src: "Unique Glass 2022" }
  ],
  "Aluminium And Steel Works": [
    { d: "Fabricate and install Swing and Slide Door with clear glass", u: "Set", c: 600 },
    { d: "Fabricate and install Glass Sliding Door, tinted", u: "Nos", c: 400 },
    { d: "Aluminium window / grille", u: "sqft", c: 35 },
    { d: "Powder-coated steel gate / door", u: "Set", c: 1400 }
  ],
  "Carpentry Works": [
    { d: "Fabricate and Install Kitchen Top Hung and Bottom Cabinet, Colour PVC (incl. up to 4 small drawers)", u: "ft run", c: 240, src: "Unique Home Design 2022", n: "+$50/ea for additional big drawer; +$5/ft in-house colour PVC, +$15/ft other PVC." },
    { d: "Fabricate and Install Island Cabinet, Colour PVC", u: "ft run", c: 250, src: "Unique Home Design 2022" },
    { d: "Fabricate and Install Bar Cabinet, Colour PVC", u: "ft run", c: 250, src: "Unique Home Design 2022" },
    { d: "Fabricate and Install Kitchen Cabinet, Marine Ply/Foam Board (body waterproof only)", u: "ft run", c: 175, src: "Unique Home Design 2022" },
    { d: "Fabricate and Install Kitchen Cabinet, Marine Ply/Foam Board (whole cabinet)", u: "ft run", c: 240, src: "Unique Home Design 2022" },
    { d: "Fabricate and Install Kitchen Cabinet with 50mm Frame", u: "ft run", c: 160, src: "Unique Home Design 2022" },
    { d: "Fabricate and Install Kitchen Cabinet with 50mm Frame c/w Laminate", u: "ft run", c: 250, src: "Unique Home Design 2022" },
    { d: "Fabricate and Install Swing Door Wardrobe with 20mm Finger Groove, Colour PVC", u: "ft run", c: 260, src: "Unique Home Design 2022", n: "+$10/ft in-house colour PVC, +$25/ft other PVC." },
    { d: "Fabricate and Install Swing Door Wardrobe with CNC Handle Profile, Colour PVC", u: "ft run", c: 280, src: "Unique Home Design 2022" },
    { d: "Fabricate and Install Swing Wardrobe with Aluminium Frame Glass Door (Black mirror/glass/frame)", u: "ft run", c: 380, src: "Unique Home Design 2022" },
    { d: "Fabricate and Install Swing Wardrobe with Aluminium Frame Glass Door (Normal)", u: "ft run", c: 350, src: "Unique Home Design 2022" },
    { d: "Fabricate and Install Sliding Wardrobe (top & bottom track), Colour PVC", u: "ft run", c: 280, src: "Unique Home Design 2022" },
    { d: "Fabricate and Install Sliding Wardrobe with Aluminium Frame Glass/Mirror Door", u: "ft run", c: 320, src: "Unique Home Design 2022" },
    { d: "Fabricate and Install Low Cabinet, 600mm height, swing doors, Colour PVC", u: "ft run", c: 150, src: "Unique Home Design 2022" },
    { d: "Fabricate and Install Low Cabinet, 900mm height, swing doors, Colour PVC", u: "ft run", c: 180, src: "Unique Home Design 2022" },
    { d: "Fabricate and Install Full Height Shoe Cabinet, 2400mm height, swing doors, Colour PVC", u: "ft run", c: 290, src: "Unique Home Design 2022" },
    { d: "Fabricate and Install TV Console, full height cabinet, Colour PVC", u: "ft run", c: 290, src: "Unique Home Design 2022" },
    { d: "Fabricate and Install Toilet Mirror Cabinet, swing doors, Colour PVC", u: "ft run", c: 180, src: "Unique Home Design 2022" },
    { d: "Fabricate and Install Toilet Vanity Bottom Cabinet, swing doors, Colour PVC", u: "ft run", c: 130, src: "Unique Home Design 2022" },
    { d: "Feature wall with laminate finish", u: "sqft", c: 25, src: "Unique Home Design 2022" },
    { d: "Bedframe (1000mm width)", u: "Pc", c: 1000, src: "Unique Home Design 2022" },
    { d: "Bedframe with drawers (Queen/King)", u: "Pc", c: 1300, src: "Unique Home Design 2022" },
    { d: "Door with door closer", u: "Pc", c: 1000, src: "Unique Home Design 2022" },
    { d: "Change door (short)", u: "Pc", c: 120, src: "Unique Home Design 2022" },
    { d: "Change door (long)", u: "Pc", c: 220, src: "Unique Home Design 2022" },
    { d: "Relaminate cabinet carcase", u: "ft run", c: 60, src: "Unique Home Design 2022" },
    { d: "Fabricate and Install Altar Cabinet - Door Cabinet & Open Shelf, White PVC", u: "ft run", c: 260, src: "Chang Tou 2021", n: "Comes with glass top & backing; +$20/ft in-house colour PVC, +$35/ft other PVC." },
    { d: "Fabricate and Install Book Cabinet & Display Cabinet, laminate finish, depth 400mm", u: "ft run", c: 340, src: "Chang Tou 2021", n: "+$20/ft for depth 401-600mm." },
    { d: "Ceiling Board, 3mm cladding", u: "sqft", c: 12, src: "Chang Tou 2021" },
    { d: "Ceiling Board, suspended", u: "sqft", c: 20, src: "Chang Tou 2021" },
    { d: "Fabricate and Install Half Height Shoe Cabinet & Settee, White PVC", u: "ft run", c: 110, src: "Chang Tou 2021" },
    { d: "Fabricate and Install Full Height Shoe Cabinet, White PVC", u: "ft run", c: 220, src: "Chang Tou 2021" },
    { d: "Fabricate and Install TV Cabinet, depth 400mm, White PVC", u: "ft run", c: 280, src: "Chang Tou 2021" },
    { d: "Fabricate and Install Suspended TV Console, White PVC", u: "ft run", c: 100, src: "Chang Tou 2021" },
    { d: "Fabricate and Install Floor Height TV Console, White PVC", u: "ft run", c: 140, src: "Chang Tou 2021" },
    { d: "TV feature wall, plain plywood", u: "sqft", c: 12, src: "Chang Tou 2021" },
    { d: "TV feature wall, with laminate finish", u: "sqft", c: 20, src: "Chang Tou 2021" },
    { d: "Fluted panel, labour & material", u: "sqft", c: 40, src: "Chang Tou 2021" },
    { d: "Fabricate and Install Island (3ft-6ft, incl. 4 drawers), White PVC", u: "ft run", c: 180, src: "Chang Tou 2021" },
    { d: "Fabricate and Install Kitchen Cabinet, White PVC (excl. hinges & hardware)", u: "ft run", c: 95, src: "Chang Tou 2021", n: "Standard top-hung height 1000mm; +$25/ft for extra height up to 3000mm (condo)." },
    { d: "Fabricate and Install Solid Nyatoh Door Kitchen Cabinet, veneer lacquer carcass, Colour PVC", u: "ft run", c: 200, src: "Chang Tou 2021", n: "+$20/ft to upgrade to colour spray paint door incl. carcass." },
    { d: "Fabricate and Install Headboard, height less than 1200mm", u: "ft run", c: 70, src: "Chang Tou 2021", n: "+$16/sqft if height more than 1200mm." },
    { d: "Single or Supersingle Bed Frame", u: "Pc", c: 480, src: "Chang Tou 2021", n: "+$100 for colour PVC." },
    { d: "Bed Head Cushion, normal cushion", u: "sqft", c: 25, src: "Chang Tou 2021" },
    { d: "Platform Bed with Storage Section (doors & drawers), H300mm", u: "sqft", c: 40, src: "Chang Tou 2021", n: "+$10/sqft H300-600mm, +$20/sqft H600-800mm." },
    { d: "Fabricate and Install Study Table, Top & Bottom Cabinet, White PVC", u: "ft run", c: 110, src: "Chang Tou 2021" },
    { d: "Fabricate and Install Full Height Storage Cabinet, White PVC", u: "ft run", c: 220, src: "Chang Tou 2021" },
    { d: "Fabricate and Install Bi-fold Door Wardrobe, White PVC", u: "ft run", c: 220, src: "Chang Tou 2021", n: "+$30/ft for taller height till 2950mm; +$35/ft for aluminium frame glass/mirror door." },
    { d: "Fabricate and Install Casement Door Wardrobe, White PVC", u: "ft run", c: 210, src: "Chang Tou 2021", n: "Maximum height 2600mm; +$30/ft for taller height till 2950mm." },
    { d: "Fabricate and Install Sliding Door Wardrobe, White PVC", u: "ft run", c: 230, src: "Chang Tou 2021", n: "Maximum height 2600mm; +$30/ft for taller height till 2950mm." },
    { d: "Fabricate and Install Walk-in Wardrobe, White PVC", u: "ft run", c: 160, src: "Chang Tou 2021" },
    { d: "Fabricate and Install Vanity Mirror Cabinet, White PVC", u: "ft run", c: 130, src: "Chang Tou 2021" },
    { d: "Vanity Bottom Cabinet, White PVC", u: "Pc", c: 100, src: "Chang Tou 2021" },
    { d: "Fixed mirror with backing & frame", u: "sqft", c: 30, src: "Chang Tou 2021" }
  ],
  "Work And Service Top": [
    { d: "Fabricate and Install Sintered Stone / Quartz Kitchen Countertop, standard", u: "ft run", c: 70 },
    { d: "Fabricate and Install Sintered Stone / Quartz Kitchen Countertop, premium", u: "ft run", c: 100 },
    { d: "Cutting, Shaping and Polishing edge for Sink cutout", u: "Nos", c: 60 }
  ],
  "Electrical Works": [
    { d: "Lighting Point / Hanging Light / Track Light / T5 Light / Wall Light / Ceiling Fan", u: "Nos", c: 28, src: "GC Electrical (Sky) 2024", n: "Condo non-conceal $30, conceal $75." },
    { d: "Installation of Lighting / T5 Light / Wall Light", u: "Nos", c: 10, src: "GC Electrical (Sky) 2024" },
    { d: "Installation of Track Light", u: "Nos", c: 20, src: "GC Electrical (Sky) 2024" },
    { d: "Installation of Hanging Light (Normal, below 3 meter)", u: "Nos", c: 45, src: "GC Electrical (Sky) 2024" },
    { d: "Installation of Clothes Hanger", u: "Nos", c: 90, src: "GC Electrical (Sky) 2024" },
    { d: "Installation of Ceiling Fan", u: "Nos", c: 45, src: "GC Electrical (Sky) 2024" },
    { d: "LED Light Point (with install)", u: "Nos", c: 60, src: "GC Electrical (Sky) 2024", n: "Condo conceal $95." },
    { d: "LED RGB Light Point (with install)", u: "Nos", c: 95, src: "GC Electrical (Sky) 2024", n: "Condo conceal $130." },
    { d: "Wall Fan Point (13A x 1 power point)", u: "Nos", c: 50, src: "GC Electrical (Sky) 2024" },
    { d: "Installation of Wall Fan", u: "Nos", c: 20, src: "GC Electrical (Sky) 2024" },
    { d: "Exhaust Fan Point (below 10Amp)", u: "Nos", c: 28, src: "GC Electrical (Sky) 2024" },
    { d: "Installation of Exhaust Fan", u: "Nos", c: 25, src: "GC Electrical (Sky) 2024" },
    { d: "Supply Door Bell", u: "Nos", c: 35, src: "GC Electrical (Sky) 2024" },
    { d: "Door Bell Point", u: "Nos", c: 70, src: "GC Electrical (Sky) 2024" },
    { d: "2-way Switch Point", u: "Nos", c: 80, src: "GC Electrical (Sky) 2024" },
    { d: "13A x 1 Power Point", u: "Nos", c: 50, src: "GC Electrical (Sky) 2024" },
    { d: "13A x 2 Power Point", u: "Nos", c: 55, src: "GC Electrical (Sky) 2024" },
    { d: "15Amp Power Point (aircon)", u: "Nos", c: 90, src: "GC Electrical (Sky) 2024" },
    { d: "13A x 1 Waterproof Power Point", u: "Nos", c: 120, src: "GC Electrical (Sky) 2024" },
    { d: "Data Point - Cat6 / Telephone Point - Cat6", u: "Nos", c: 110, src: "GC Electrical (Sky) 2024" },
    { d: "Data Point - Cat6A", u: "Nos", c: 150, src: "GC Electrical (Sky) 2024" },
    { d: "Data Point - Cat7", u: "Nos", c: 180, src: "GC Electrical (Sky) 2024" },
    { d: "Speaker Point", u: "Nos", c: 50, src: "GC Electrical (Sky) 2024" },
    { d: "20Amp Heater Point", u: "Nos", c: 90, src: "GC Electrical (Sky) 2024" },
    { d: "20Amp 2-way Heater Point", u: "Nos", c: 280, src: "GC Electrical (Sky) 2024" },
    { d: "Connection Heater", u: "Nos", c: 45, src: "GC Electrical (Sky) 2024" },
    { d: "Opennet Connection", u: "Nos", c: 250, src: "GC Electrical (Sky) 2024" },
    { d: "DB Board, 3 Room", u: "Set", c: 350, src: "GC Electrical (Sky) 2024" },
    { d: "DB Board, 4-5 Room", u: "Set", c: 400, src: "GC Electrical (Sky) 2024" },
    { d: "DB Board, 5 Room EA", u: "Set", c: 450, src: "GC Electrical (Sky) 2024" },
    { d: "DB Board, Maisonette / Jumbo", u: "Set", c: 500, src: "GC Electrical (Sky) 2024" },
    { d: "20Amp SPN Isolator", u: "Nos", c: 180, src: "GC Electrical (Sky) 2024" },
    { d: "Master Switch Control", u: "Nos", c: 95, src: "GC Electrical (Sky) 2024" },
    { d: "Cooker Hood Point (below 10Amp)", u: "Nos", c: 40, src: "GC Electrical (Sky) 2024" },
    { d: "Cooker Hob Point (13A x 1 power point)", u: "Nos", c: 50, src: "GC Electrical (Sky) 2024" },
    { d: "Microwave / Oven / Induction Point (15Amp - 20Amp)", u: "Nos", c: 90, src: "GC Electrical (Sky) 2024" },
    { d: "Shifting of 1 Gang Switch", u: "Nos", c: 35, src: "GC Electrical (Sky) 2024" },
    { d: "Shifting of 2 Gang Switch", u: "Nos", c: 55, src: "GC Electrical (Sky) 2024" },
    { d: "Shifting of 3 Gang Switch", u: "Nos", c: 85, src: "GC Electrical (Sky) 2024" },
    { d: "Shifting of 4 Gang Switch", u: "Nos", c: 100, src: "GC Electrical (Sky) 2024" },
    { d: "Changing of 13A x 1 Waterproof Socket (MK Grey / Hager)", u: "Nos", c: 70, src: "GC Electrical (Sky) 2024" },
    { d: "Changing of 13A x 2 Waterproof Socket (MK Grey / Hager)", u: "Nos", c: 95, src: "GC Electrical (Sky) 2024" }
  ],
  "Flooring Works": [
    { d: "Evo HERF High-End Resilient Floor, 5mm, without skirting", u: "sqft", c: 4.80, src: "Evorich" },
    { d: "Evo HERF High-End Resilient Floor, 5mm, with laminate skirting", u: "sqft", c: 5.00, src: "Evorich" },
    { d: "Evo HERF High-End Resilient Floor, 5mm, with PVC skirting", u: "sqft", c: 5.20, src: "Evorich" },
    { d: "Absolute Engineered Vinyl Wood Series, 6.5mm, without skirting", u: "sqft", c: 3.80, src: "Evorich" },
    { d: "Absolute Engineered Vinyl Wood Series, 6.5mm, with PVC skirting", u: "sqft", c: 4.30, src: "Evorich" },
    { d: "Gigantic Stone Series Vinyl, 5.5mm, without skirting", u: "sqft", c: 5.50, src: "Evorich" },
    { d: "Grand Marble Series Vinyl, 5.5mm, without skirting", u: "sqft", c: 5.50, src: "Evorich" },
    { d: "Conecto Vinyl, 4.5mm, without skirting", u: "sqft", c: 3.50, src: "Evorich" },
    { d: "HERF Herringbone Vinyl, 5mm, without skirting", u: "sqft", c: 5.50, src: "Evorich", n: "Additional 25% wastage applies." },
    { d: "HERF PHD Vinyl, 7.5mm, without skirting", u: "sqft", c: 5.85, src: "Evorich", n: "Additional 10% wastage applies." },
    { d: "Chengal Decking", u: "sqft", c: 18.00, src: "Evorich" },
    { d: "Evo Deck Outdoor Decking, with Balau Batten", u: "sqft", c: 19.80, src: "Evorich" },
    { d: "EvoWalls", u: "sqft", c: 7.80, src: "Evorich", n: "Additional 20% wastage applies." },
    { d: "Evo Ceiling", u: "sqft", c: 15.60, src: "Evorich" },
    { d: "Platform construction only, up to 85mm", u: "sqft", c: 5.50, src: "Evorich" },
    { d: "Platform construction only, up to 150mm", u: "sqft", c: 6.50, src: "Evorich" },
    { d: "Hacking of skirting (ceramic tiles), per room", u: "Room", c: 75, src: "Evorich" },
    { d: "Dismantle existing vinyl / laminate flooring", u: "sqft", c: 0.70, src: "Evorich" },
    { d: "Re-grout tile joints with colour epoxy grouting", u: "sqft", c: 2.50 },
    { d: "Rake out existing grout and apply new epoxy grouting, wet area (floor & wall)", u: "sqft", c: 3.80 }
  ],
  "Aircon Works": [
    { d: "Aircon piping and installation, per fan coil (System 1)", u: "Nos", c: 600 },
    { d: "Box up Aircon Piping / Trunking", u: "ft run", c: 40 }
  ],
  "Miscellaneous Works": [
    { d: "General Cleaning upon completion, whole house", u: "Lot", c: 300 },
    { d: "Chemical Wash upon completion of all wet works, whole house", u: "Lot", c: 350 },
    { d: "Protection works (corridor / lift / common area)", u: "Lot", c: 150 }
  ]
};

/* ---------------- Contractor / supplier contact directory ----------------
   Parsed verbatim from the user's own Contact List spreadsheet, grouped by
   trade heading exactly as laid out in the source file. */
const CONTACT_DIRECTORY = [
{"group":"3D DRAFTER","rows":[
  {"company":"Charles","contact":"Charles","mobile":"8366 0144"},
  {"company":"Wen Jun","contact":"Z House","mobile":"9385 7661"},
  {"company":"Luxt Design","contact":"Sean","mobile":"9057 3946"}
]},
{"group":"BANK LOAN","rows":[
  {"company":"TakeONE (OCBC/Maybank/UOB/ANZ/DBS)","contact":"Sandy","mobile":"976 20530","office":"68440212","fax":"68440292"}
]},
{"group":"ENGINEERS / PE ENDORSEMENT","rows":[
  {"company":"Tham Engineering Consultants","contact":"Mr Tham","mobile":"9730 9101","office":"6341 7605","fax":"6341 7583"},
  {"company":"Goh Khai Siang","contact":"Mr Tan","mobile":"91836738"},
  {"company":"Aggies Engineering Services","contact":"Chin Chai Wah","mobile":"9005 6642"}
]},
{"group":"BUILDERS","rows":[
  {"company":"3G Construction Pte Ltd","contact":"Ah Chong","mobile":"9488 7100"}
]},
{"group":"FIRE SAFETY AND SHELTER DEPARTMENT (FSSD)","rows":[
  {"company":"Mr Foo","contact":"Mr Foo","mobile":"9632 1961"}
]},
{"group":"GAS PIPE WORKS","rows":[
  {"company":"City Gas (For HDB West Side Only)","contact":"Joanne","office":"67552245"},
  {"company":"City Gas (For HDB Only)","contact":"City Gas","office":"18005551661"},
  {"company":"NIC Gas Services (Private)","contact":"Hafiz","mobile":"96950565","office":"68947144"},
  {"company":"GASHUB united holding private limited (Private)","contact":"MD Hasan","mobile":"90067743","office":"68443430","fax":"62889803"},
  {"company":"Ah Wei (Private)","contact":"Ah Wei","mobile":"8360 9867"},
  {"company":"Jason (Private)","contact":"Jason","mobile":"9188 4868"}
]},
{"group":"RAW MATERIALS","rows":[
  {"company":"Nippon Paint Singapore","contact":"Valerie","mobile":"9003 9936"},
  {"company":"Nippon Paint Singapore (For Orders)","contact":"Chai Hui","mobile":"8127 9751"}
]},
{"group":"TILES SUPPLIER","rows":[
  {"company":"Hafary Private Ltd","contact":"Dolly Yang","mobile":"9800 0321","office":"6250 1368","fax":"6251 1620"},
  {"company":"Soon Bee Huat","contact":"Winnie Lee","mobile":"9759 9269","office":"6440 1900","fax":"6440 4692"},
  {"company":"Lian Seng Hin Co., (Pte) Ltd","contact":"Stephanny Wong","mobile":"9386 0096","fax":"6747 6233"},
  {"company":"Rice Fields Pte Ltd","office":"6692 1199","fax":"6692 1199"},
  {"company":"GFA"},
  {"company":"White Horse Ceramic(s) Pte Ltd","contact":"Wendy","mobile":"9852 0393","office":"6269 0555","fax":"6269 0055"},
  {"company":"Hup Kiong Private Limited","contact":"Bryan","mobile":"9819 5700"}
]},
{"group":"MARBLE / GRANITE SUPPLIER","rows":[
  {"company":"Hafary Private Ltd","contact":"Dolly Yang","mobile":"9800 0321","office":"6250 1368","fax":"6251 1620"},
  {"company":"Lian Hin Pte Ltd","contact":"Kelson Toh","mobile":"93839194 / 8666 6697"},
  {"company":"Egeo Marble","contact":"Alan Loon","mobile":"87159929"},
  {"company":"Lim Express Marble","contact":"Ah Lim","mobile":"9666 9980"},
  {"company":"Mondo Build Pte Ltd","contact":"Tristan","mobile":"9668 6054","office":"62533817","fax":"62509422"}
]},
{"group":"CRAFTSTONE","rows":[
  {"company":"Craftstone","contact":"Howard","mobile":"9383 1783","office":"6362 1588","fax":"6365 6685"}
]},
{"group":"STONE SUPPLIER","rows":[
  {"company":"Pee Huan Pte Ltd","contact":"Darwin Shia","mobile":"9759 6363","office":"6459 7555","fax":"6452 7555"}
]},
{"group":"HACKING WORKS","rows":[
  {"company":"K&C Groups.com (Private) Ltd","contact":"Ah Kiat","mobile":"9681 8988","office":"6291 8988","fax":"6452 6803"},
  {"company":"ST Construction","contact":"Titu","mobile":"8504 3556"},
  {"company":"RD Demolition","contact":"Danny","mobile":"9022 4429"}
]},
{"group":"MASONRY WORKS / TILERS","rows":[
  {"company":"YK Superperfect Renovation Pte Ltd","contact":"Jun Qiang / Ah Yao","mobile":"9136 2286 / 8168 8998"},
  {"company":"Yao Jin Jun","contact":"Ah Yao","mobile":"8407 5556"},
  {"company":"Jiang Cheng Interior Engineering Pte Ltd","contact":"Ah Pu","mobile":"9097 8689"},
  {"company":"TIS Contract","contact":"Leon","mobile":"8183 9376"},
  {"company":"Yao Ming Xiang","contact":"Ah Yao","mobile":"8351 4190"},
  {"company":"Tan Joon Hua","contact":"Zhong Hua","mobile":"8338 4632"},
  {"company":"Ah Boon","contact":"Ah Boon","mobile":"9817 2979"},
  {"company":"Lam Cheng Mun","contact":"Ah Mun","mobile":"9635 2612"}
]},
{"group":"AIRCON CONTRACTORS","rows":[
  {"company":"Everwin","contact":"Ah Kok","mobile":"9046 2137"},
  {"company":"Ricool Engineering Pte Ltd","contact":"Jason","mobile":"9798 6555"},
  {"company":"KH Air-conditioning Services","contact":"Ah Di","mobile":"9857 1390","office":"6852 1020","fax":"6339 3477"}
]},
{"group":"ELECTRICAL WORKS / ELECTRICIANS","rows":[
  {"company":"Toang Sheng Engineering","contact":"Henry","mobile":"9794 9646"},
  {"company":"GC Electrical","contact":"Sky","mobile":"8800 3243","office":"6951 1392","fax":"6951 3847"},
  {"company":"Hock Electrical","contact":"Ah Chuan","mobile":"92271334"},
  {"company":"Line8 Singapore Pte Ltd","contact":"Kenneth","mobile":"8918 0477"}
]},
{"group":"CCTV / HOME NETWORKS","rows":[
  {"company":"Mediapro Technology","contact":"Peter","mobile":"8430 3077","office":"6338 2800","fax":"6339 7578"}
]},
{"group":"OPENNET","rows":[
  {"company":"Ah Fan","contact":"Ah Fan","mobile":"9621 7513"}
]},
{"group":"PLUMBING WORKS / PLUMBERS","rows":[
  {"company":"PH RENOVATION & PLUMBING PTE LTD","contact":"Ah Bin","mobile":"9792 2665","office":"6745 1535"},
  {"company":"St Plumbing & Renovations","contact":"Chuah Peah Loon","mobile":"9792 2665"},
  {"company":"Hua Chong Plumbing & Renovation","contact":"Ah Tiong","mobile":"9003 6808"},
  {"company":"Plumbing Ah Huat","contact":"Ah Huat (plumbing)","mobile":"9899 0090"},
  {"company":"Ah Lee","contact":"Ah Lee","mobile":"8575 4892"},
  {"company":"Tis Contract","contact":"Leon","mobile":"8183 9376"}
]},
{"group":"CHOKAGE","rows":[
  {"company":"Tan Seng Electrical Plumbing & Sanitary","contact":"Ah Toh","mobile":"9665 2259"},
  {"company":"Ray Clear Choke Engineering","contact":"Ah Hock","mobile":"9857 4417"},
  {"company":"Total Jet","contact":"Alvin","mobile":"9733 8682"}
]},
{"group":"SEWAGE PIPE","rows":[
  {"company":"Yen Chuan Contractor","contact":"Ah Tiong","mobile":"96183415"}
]},
{"group":"PLASTERCEIL / PLASTERER","rows":[
  {"company":"Chai Renovation","contact":"Ah Chai","mobile":"9272 1719"},
  {"company":"Plaster Chuan","contact":"Chuan","mobile":"9385 7815"},
  {"company":"Ah Leong","contact":"Ah Leong","mobile":"8290 1017"},
  {"company":"Yeak & Song Renovation Contractor","contact":"Gao Lao","mobile":"9027 3866"},
  {"company":"L & H Plasterceil Pte Ltd","contact":"Ah Gan","mobile":"87230113"},
  {"company":"Lee leng","contact":"Rong Jie","mobile":"9756 7481"}
]},
{"group":"PLASTER CEILING & PARTITION","rows":[
  {"company":"Gem Interior Decoration","contact":"Ah Yong","mobile":"9646 6261"},
  {"company":"Seng Ming Plaster Ceiling Trading","contact":"Eric","mobile":"90264687","office":"6456 0596"},
  {"company":"L & H Plasterceil Pte Ltd","contact":"Ah Ching","mobile":"9756 5212"},
  {"company":"Lee leng","contact":"Rong Jie","mobile":"9756 7481"}
]},
{"group":"GLASS WORKS","rows":[
  {"company":"Unique Glass Pte Ltd","contact":"Guoliang","mobile":"96756279","office":"6257 1393","fax":"6257 1428"}
]},
{"group":"WALL FINISHING WORKS / PAINTER","rows":[
  {"company":"Mohamad Khir Bin Abdul Aziz","contact":"Panjang","mobile":"8386 7719"},
  {"company":"The Galaxy Painting (Chua Sian Yeak)","contact":"Ah Yao","mobile":"8113 1684"},
  {"company":"YS Renovation Group","contact":"Yong Sheng","mobile":"9689 4652"},
  {"company":"Link Design & Enterprises Pte Ltd","contact":"Rahmah","mobile":"8107 7507"},
  {"company":"Kim Roong Renovation Works","contact":"Jeremy","mobile":"9851 5852","office":"6452 5538"},
  {"company":"LSH Engineering Pte Ltd","contact":"Jony","mobile":"9895 0547"}
]},
{"group":"MICRO CEMENT / STUCCO WALL EFFECT","rows":[
  {"company":"Tai Thong Interior & Trading LLP","contact":"Anthony","mobile":"9150 3033"},
  {"company":"Y S Renovation (Rock Stone)","contact":"Yong Sheng","mobile":"9689 4652"},
  {"company":"Chroma (Suzuka)","contact":"Jasper Ong","mobile":"9108 4885"}
]},
{"group":"BATHROOM ACCESSORIES","rows":[
  {"company":"Hua Chong Bathroom & Kitchen Products","contact":"Ah Tiong","mobile":"9003 6808 / 6448 8578"},
  {"company":"Haus Square","contact":"Lynn","mobile":"9025 2209"},
  {"company":"Lucky Khoon","contact":"Scarlette","mobile":"8181 2502","office":"6346 6353"}
]},
{"group":"LIGHTING ACCESSORIES","rows":[
  {"company":"Sol Luminaire","contact":"Kai","mobile":"8121 5957"}
]},
{"group":"KITCHEN APPLIANCES","rows":[
  {"company":"TEKA Singapore Pte Ltd","contact":"Elin","mobile":"9661 1011"},
  {"company":"Haus Square Pte Ltd","contact":"Lyn","mobile":"9025 2209"},
  {"company":"Hua Chong Bathroom & Kitchen Products","contact":"Ah Tiong","mobile":"9003 6808 / 6448 8578"}
]},
{"group":"CARPENTRY WORKS / LAMINATE SUPPLIER","rows":[
  {"company":"Admira Pte Ltd","contact":"Jason Fan","mobile":"8299 5598","office":"6368 0123"},
  {"company":"TAK Products & Services Pte Ltd","contact":"Alvin","mobile":"9711 9511"},
  {"company":"Arova","contact":"James","mobile":"9272 2550"},
  {"company":"EDL","contact":"Gibby","mobile":"9640 9361"},
  {"company":"Jennings Pte Ltd","contact":"Serene","mobile":"9679 0023"},
  {"company":"Lam Chuan","contact":"Leon","mobile":"8299 1549"},
  {"company":"Keminate","contact":"Cedric","mobile":"9144 8827"},
  {"company":"Keding Enterprises Pte. Ltd. (KD Panel)","contact":"Lenice","mobile":"9725 3500"}
]},
{"group":"ACRYLIC & MELAMINE PANELS","rows":[
  {"company":"Sunyu Products & Services Pte Ltd","contact":"Joanne","mobile":"9637 3804"}
]},
{"group":"URBANKITCHEN / CARCASS MANUFACTURE","rows":[
  {"company":"Welead Pte Ltd - General Enquiry for order","contact":"Huan Yin","mobile":"9232 0413"}
]},
{"group":"DECO PANEL","rows":[
  {"company":"Series Supplies","contact":"Bobby Lim","mobile":"91080618"},
  {"company":"Chroma","contact":"Jasper Ong","mobile":"9108 4885"}
]},
{"group":"CARPENTERS","rows":[
  {"company":"Tay Kian Huat","contact":"Ah Huat","mobile":"9093 3030"},
  {"company":"Chang Tou","contact":"Chang Tou","mobile":"9061 9681"},
  {"company":"Yu Tan Decoration","contact":"Ah Lim","mobile":"9239 2645"},
  {"company":"MD Interior Design","contact":"Ah Bao"},
  {"company":"Tan Siew Mei","contact":"Xiao Chen","mobile":"8588 6676"},
  {"company":"Tee Sheau Chin","contact":"Xiao Chin","mobile":"9472 8662"}
]},
{"group":"HARDWARE & MECHANISMS","rows":[
  {"company":"Blum South East Asia Pte Ltd","contact":"Dylan","mobile":"8940 9029","office":"6547 1760","fax":"6547 1761"},
  {"company":"Silence Motion Ent. Pte Ltd (Hettich)","contact":"Mr Tan","mobile":"9618 5966","office":"6443 3070","fax":"6443 3449"},
  {"company":"Hafele Singapore Pte Ltd","contact":"Abby","mobile":"9067 5004"},
  {"company":"AWS Bloss Marketing (Handle)","contact":"Gwen","mobile":"9382 2132"},
  {"company":"Untoldstr (Handle)","contact":"Leon","mobile":"9162 5430"},
  {"company":"Vivoform Pte Ltd","contact":"Adele","mobile":"6844 3384"},
  {"company":"UIS / KKPL","contact":"Michael","mobile":"9021 7898"},
  {"company":"Overit Architectural (Cubo)","contact":"Damien Chia","mobile":"8299 2723"}
]},
{"group":"CARPENTRY PAINTING & SPRAY PAINT ON WOOD","rows":[
  {"company":"Lim Wai Ban","contact":"Ah Man","mobile":"9388 0386"},
  {"company":"Boong Yong Chun","contact":"Ah Shun","mobile":"9486 0080"}
]},
{"group":"DRAWER JEWELRY DIVIDER","rows":[
  {"company":"Betterment","contact":"John Fang Wai Kong","mobile":"9238 2720"}
]},
{"group":"POLE SYSTEMS","rows":[
  {"company":"AB Door Pte Ltd","contact":"Alvin","mobile":"9272 5255"}
]},
{"group":"WORKTOPS - MARBLE / GRANITE","rows":[
  {"company":"Lian Hin Pte Ltd","contact":"Wendy / Kelson Toh","mobile":"9859 2678 / 93839194","office":"6294 6801"}
]},
{"group":"WORKTOPS - SINTERED / QUARTZ","rows":[
  {"company":"Melmer (Consentino and Others)","contact":"Alvin Tham / Fabian","mobile":"8858 7382 / 9691 5957","office":"6362 0308","fax":"6363 1268"},
  {"company":"Lian Hin Pte Ltd","contact":"Wendy / Kelson Toh","mobile":"9859 2678 / 93839194","office":"6294 6801"},
  {"company":"Casa Stone Pte Ltd","contact":"Bryan / Silver","mobile":"8686 2788 / 8725 2668"},
  {"company":"Egeo Marble Pte Ltd (Cosentino & Cesar Stone)","contact":"Francis","mobile":"9683 0003"},
  {"company":"Seasonstone","contact":"Keith","mobile":"8787 4222"}
]},
{"group":"KOMPACPLUS","rows":[
  {"company":"Kompacplus Pte Ltd","contact":"Charles","mobile":"8533 5577","office":"6842 0335","fax":"6842 0353"}
]},
{"group":"METAL WORKS - GATE, DOOR & WINDOW / ALUMINIUM","rows":[
  {"company":"M Aluminium & Glass Pte Ltd (MAG)","contact":"Wendy","mobile":"8660 3780","office":"6909 5936","fax":"6909 5938"},
  {"company":"Aluminium Shop Pte Ltd","contact":"Ah Guan","mobile":"9133 7854"},
  {"company":"Yong Heng Aluminium Engineering Work","contact":"Ah Yew","mobile":"9030 8022","office":"6753 7714","fax":"6566 4652"},
  {"company":"Central Aluminium & Glass Construction Pte Ltd","contact":"Soh","mobile":"9630 3498","office":"6368 3313","fax":"6368 7137"},
  {"company":"AG Door Pte Ltd (Conceal Door)","contact":"Julie Ong","mobile":"9459 9981","office":"6363 1488","fax":"6363 3072"},
  {"company":"Meng Zhen Forge Metal","contact":"Chai","mobile":"9627 5830"},
  {"company":"Spacedor","contact":"Jackey","mobile":"9111 6332"}
]},
{"group":"STEEL","rows":[
  {"company":"Twin Full Engineering","contact":"Ah Hock","mobile":"9821 0408 / 9060 9092","office":"6854 1286"},
  {"company":"Link Metal","contact":"Qi Jun / Ah Meng","mobile":"9191 3754 / 9731 8036"},
  {"company":"Sai Huat Metal Fabrication Pte Ltd","contact":"Alex","mobile":"9135 5322","office":"6493 2711","fax":"6493 2712"}
]},
{"group":"PD DOOR","rows":[
  {"company":"VYY Pte Ltd","contact":"Jenny Tan","mobile":"98589388","office":"6747 8880","fax":"6747 0938"}
]},
{"group":"INVISIBLE GRILLES & AUTOMATED GATE","rows":[
  {"company":"Legate Enterprise Pte Ltd","contact":"Kenneth","mobile":"84882925"},
  {"company":"CSA Group Pte Ltd","contact":"TS Chung","mobile":"8588 9339 / 9690 4115"}
]},
{"group":"STAINLESS STEEL","rows":[
  {"company":"LKM Steelwork & Services Pte Ltd","contact":"Ah Meng","mobile":"90164611"}
]},
{"group":"POWDER COATING","rows":[
  {"company":"Hong Yi Industrial","contact":"Lim","mobile":"9025 6027"}
]},
{"group":"WOODEN DOOR WORKS / DOOR MAKER","rows":[
  {"company":"Maicador (S) Trading Pte Ltd","contact":"Irene","mobile":"97828890","office":"6747 1572","fax":"6747 8393"},
  {"company":"United Door","contact":"Ah Yam / Bi Yuen","mobile":"9296 1812 / 9164 0117","office":"6286 5759","fax":"6286 8579"},
  {"company":"9One9","contact":"9One9","mobile":"8175 5499"},
  {"company":"K&K","contact":"Ah Keong","mobile":"8317 7603"}
]},
{"group":"DIGITAL LOCK","rows":[
  {"company":"Frederick","contact":"Frederick","mobile":"9856 6260"},
  {"company":"An Digital","contact":"Kelly","mobile":"9001 2748","office":"6966 6788"},
  {"company":"Digital Lock Installer","contact":"Jason Ferris","mobile":"9856 0144"}
]},
{"group":"FLOORING WORKS - ENGINEERED WOOD FLOOR","rows":[
  {"company":"Wood Culture Pte Ltd","contact":"Serence","mobile":"8188 1827","office":"6686 2133","fax":"6686 2131"},
  {"company":"Evorich Holdings Pte Ltd","contact":"Syndi","mobile":"9183 8887","office":"6348 7333","fax":"6342 9331"}
]},
{"group":"VINYL FLOOR","rows":[
  {"company":"Evorich Holdings Pte Ltd","contact":"Syndi","mobile":"9183 8887","office":"6348 7333","fax":"6342 9331"},
  {"company":"WoodCulture Pte Ltd","contact":"Frank Ho","mobile":"8522 9228","office":"6686 2133","fax":"6686 2131"},
  {"company":"Floor Xpert","contact":"Claire","mobile":"8292 8820","office":"6749 3128","fax":"6844 7822"}
]},
{"group":"PARQUET FLOOR / CHENGAL DECKING","rows":[
  {"company":"Seng Hong Parquet","contact":"Ah Sin","mobile":"9781 6742"},
  {"company":"Classic Parquet & Trading","contact":"Ah Yee","mobile":"9684 9040"},
  {"company":"Song Aik Timber Construction","contact":"Ah Huat","mobile":"8833 9398"},
  {"company":"Jing Hui Parquet","contact":"Ah Lim","mobile":"9119 2442"}
]},
{"group":"TILES / MARBLE & GROUTING GUM","rows":[
  {"company":"Yong Marble General Contractor","contact":"Ah Yong","mobile":"9661 7011"},
  {"company":"Riche Stone Care Pte Ltd","contact":"Kelvin Boo","mobile":"9386 1199","office":"6481 6641","fax":"6481 4661"}
]},
{"group":"CLEANER - CHEMICAL WASHING","rows":[
  {"company":"Tan Keng Yee","contact":"Tan Keng Yee","mobile":"9660 5452"},
  {"company":"Rocky","contact":"Rocky","mobile":"9087 6006"},
  {"company":"Modest Renovation","contact":"Bobo","mobile":"9742 9956"},
  {"company":"Uddin Soto","contact":"Soto","mobile":"8211 7680"},
  {"company":"Post Renovation","contact":"Alexius Pek","mobile":"9129 5322"}
]},
{"group":"POST CLEANING / DEEP CLEANING","rows":[
  {"company":"4 everclean","contact":"Garyson Ng","mobile":"9093 2627"}
]},
{"group":"ZIPTRAK, CURTAINS & BLINDS","rows":[
  {"company":"Infinium Pte Ltd","contact":"Jin Ling","mobile":"8183 1171"}
]},
{"group":"WALLPAPER","rows":[
  {"company":"Infinium Pte Ltd","contact":"Jin Ling","mobile":"8183 1171"},
  {"company":"Wall Image Pte Ltd","contact":"Ah Seng","mobile":"8201 3606"},
  {"company":"Arte International","contact":"Lily Chong","mobile":"8870 6339"},
  {"company":"De Art Studio","contact":"Micheal","mobile":"8100 7352"},
  {"company":"Kim Atelier","contact":"Gerald","mobile":"8733 7218"}
]},
{"group":"SOLAR FILM","rows":[
  {"company":"Jim Lim Design Trading","contact":"Jim","mobile":"98352474"},
  {"company":"De Art Studio","contact":"Micheal","mobile":"8100 7352"},
  {"company":"Infinium Pte Ltd","contact":"Jin Ling","mobile":"8183 1171"}
]},
{"group":"FURNITURE & DECORATIONS","rows":[
  {"company":"Ittibaa Glazing Enterprise Pte Ltd","contact":"Deen","mobile":"9489 1575"},
  {"company":"Iconos (Office Furniture)","contact":"Victoria","mobile":"98560147"}
]},
{"group":"SIGNAGE","rows":[
  {"company":"Sui Genenis Neon","contact":"Liang Kok","mobile":"8202 8821"}
]},
{"group":"OTHERS","rows":[
  {"company":"Don TV Installer","contact":"Don Installer","mobile":"9028 7787"},
  {"company":"Tao Bao Furniture Installer","contact":"Mike","mobile":"9456 6615"},
  {"company":"Delivery Man (V3 Pte Ltd)","contact":"Alex Tay","mobile":"9221 1148"},
  {"company":"YK Toh Marketing (S) Pte Ltd (Boltless Shelve)","contact":"Alex Benedict Wong","mobile":"8111 6612","office":"6542 3232","fax":"6542 3636"}
]},
{"group":"ROOFING WORKS","rows":[
  {"company":"Yong Lee Huat Awning & Renovation","contact":"Ah Dee","mobile":"9619 2047"}
]},
{"group":"REFUSE CHUTE COVER","rows":[
  {"company":"Riben Rubbish Chute Contractor","contact":"Ricky","mobile":"9695 2436"}
]},
{"group":"WATERPROOFING WORKS","rows":[
  {"company":"Proseal Contact","contact":"Gabriel","mobile":"9830 4990"}
]},
{"group":"SCAFFOLDING","rows":[
  {"company":"Wu Gui","contact":"Jeffery","mobile":"9778 0808"}
]},
{"group":"LANDSCAPE","rows":[
  {"company":"Ng Eng Chong Landscape","contact":"Joe","mobile":"9388 5383"}
]}
];
