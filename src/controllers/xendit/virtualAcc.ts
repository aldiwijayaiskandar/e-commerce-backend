import { xendit } from "./xendit";
import { addDays, format } from "date-fns";

const { VirtualAcc } = xendit;
const vaSpecificOptions = {};
const VA = new VirtualAcc(vaSpecificOptions);

const createVa = async (
  phone_number: String,
  name: String,
  bank_code: String,
  amount: number
) => {
  try {
    let date = new Date();
    const acc = await VA.createFixedVA({
      externalID:
        phone_number +
        Math.floor(Math.random() * (999 - 100 + 1) + 100).toString(),
      bankCode: bank_code.toString(),
      name: name,
      expectedAmt: amount,
      expirationDate: addDays(date, 1),
      isSingleUse: true,
    });
    // console.log(acc);
    return acc;
  } catch (e) {
    return e;
  }
};

const getBank = async () => {
  return await VA.getVABanks();
};

const getVA = async (id: any) => {
  return await VA.getFixedVA({ id: id });
};

export { createVa, getBank, getVA };
