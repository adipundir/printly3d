/**
 * Print-cost estimate from model geometry.
 *
 * This is deterministic slicer-style math, not a black box: material grams come from the
 * solid volume adjusted for typical infill + shells, and price is a transparent
 * setup + per-gram formula. All assumptions are returned so the caller can show them.
 */

export interface PrintEstimate {
  material: "PLA";
  infillPct: number;
  densityGCm3: number;
  grams: number;
  printMinutes: number;
  priceUsd: number;
  assumptions: string;
}

const DENSITY_PLA = 1.24; // g/cm^3
const INFILL = 0.2; // 20% infill
// effective fill factor: interior at INFILL plus solid shells/top/bottom for a small part
const FILL_FACTOR = INFILL + 0.22;
const SETUP_USD = 1.5; // handling / setup
const PER_GRAM_USD = 0.08; // material + machine time + margin
const MINUTES_PER_CM3 = 4.5;

export function estimatePrint(volumeMm3: number): PrintEstimate {
  const volCm3 = volumeMm3 / 1000;
  const grams = volCm3 * DENSITY_PLA * FILL_FACTOR;
  const printMinutes = Math.max(6, Math.round(volCm3 * MINUTES_PER_CM3));
  const priceUsd = Math.round((SETUP_USD + grams * PER_GRAM_USD) * 100) / 100;
  return {
    material: "PLA",
    infillPct: INFILL * 100,
    densityGCm3: DENSITY_PLA,
    grams: Math.round(grams * 10) / 10,
    printMinutes,
    priceUsd,
    assumptions: `PLA @ ${DENSITY_PLA} g/cm³, ${INFILL * 100}% infill + solid shells; price = $${SETUP_USD} setup + $${PER_GRAM_USD}/g`,
  };
}
