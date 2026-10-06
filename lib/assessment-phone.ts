const PHONE_COUNTRIES: Record<string, string> = {
  "+234": "NG",
  "+61": "AU",
};

export function normalizeAssessmentPhone(value: unknown, countryCode: unknown) {
  if (
    typeof value !== "string" ||
    typeof countryCode !== "string" ||
    !Object.prototype.hasOwnProperty.call(PHONE_COUNTRIES, countryCode) ||
    !/^\+?[\d\s().-]+$/.test(value.trim())
  ) {
    return null;
  }

  let digits = value.replace(/\D/g, "");
  if (value.trim().startsWith("+")) {
    if (!digits.startsWith(countryCode.slice(1))) return null;
    digits = digits.slice(countryCode.length - 1);
  }
  // Nigeria and Australia use a leading zero for national numbers.
  digits = digits.replace(/^0/, "");
  const phone = `${countryCode}${digits}`;
  if (digits.length < 7 || !/^\+[1-9]\d{7,14}$/.test(phone)) return null;

  return { phone, countryShortName: PHONE_COUNTRIES[countryCode] };
}
