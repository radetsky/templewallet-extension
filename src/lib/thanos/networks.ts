import { TZStatsNetwork } from "lib/tzstats";
import { ThanosNetwork } from "lib/thanos/types";

export const NETWORKS: ThanosNetwork[] = [
  {
    id: "mainnet",
    name: "Tezos Mainnet",
    description: "Carthage mainnet",
    type: "main",
    rpcBaseURL: "https://mainnet-tezos.giganode.io",
    tzStats: TZStatsNetwork.Mainnet,
    color: "#83b300",
    disabled: false,
  },
  {
    id: "carthagenet",
    name: "Carthage Testnet",
    description: "Carthage testnet",
    type: "test",
    rpcBaseURL: "https://testnet-tezos.giganode.io",
    tzStats: TZStatsNetwork.Carthagenet,
    color: "#0f4c81",
    disabled: false,
  },
  {
    id: "dalphanet",
    name: "Dalpha Testnet (soon)",
    description: "Dalpha testnet",
    type: "test",
    rpcBaseURL: "https://dalphanet-tezos.giganode.io",
    tzStats: TZStatsNetwork.Dalphanet,
    color: "#ed6663",
    disabled: true,
  },
  {
    id: "sandbox",
    name: "localhost:8732",
    description: "Local Sandbox",
    type: "test",
    rpcBaseURL: "http://localhost:8732",
    tzStats: null,
    color: "#e9e1cc",
    disabled: false,
  },
];
