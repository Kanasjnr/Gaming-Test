import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const DegenTokenModule = buildModule("TokenModule", (m) => {
  const Degen = m.contract("DegenToken");

  return { Degen };
});

export default DegenTokenModule;