import {
  getContract,
  encodeAbiParameters,
  encodeFunctionData,
  type Address,
  type GetContractReturnType,
  type Transport,
  type PublicClient,
  type Client,
  type EncodeFunctionDataParameters,
  type Chain,
  type Hex,
  type ReadContractReturnType,
} from "viem";
import {
  ChainNotFoundError,
  AccountNotFoundError,
  isSmartAccountClient,
  IncompatibleClientError,
  type SmartContractAccount,
  type UserOperationOverrides,
  type GetAccountParameter,
  type SendUserOperationResult,
} from "@alchemy/aa-core";
import { type Plugin } from "../types.js";
import { installPlugin as installPlugin_ } from "../../plugin-manager/installPlugin.js";
import { type FunctionReference } from "../../account-loupe/types.js";

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ERC6900PluginGen: This file is auto-generated by plugingen
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

type ExecutionActions<
  TAccount extends SmartContractAccount | undefined =
    | SmartContractAccount
    | undefined,
> = {
  updateOwners: (
    args: Pick<
      EncodeFunctionDataParameters<
        typeof MultiOwnerPluginExecutionFunctionAbi,
        "updateOwners"
      >,
      "args"
    > & { overrides?: UserOperationOverrides } & GetAccountParameter<TAccount>,
  ) => Promise<SendUserOperationResult>;
};

type InstallArgs = [{ type: "address[]" }];

export type InstallMultiOwnerPluginParams = {
  args: Parameters<typeof encodeAbiParameters<InstallArgs>>[1];
  pluginAddress?: Address;
  dependencyOverrides?: FunctionReference[];
};

type ManagementActions<
  TAccount extends SmartContractAccount | undefined =
    | SmartContractAccount
    | undefined,
> = {
  installMultiOwnerPlugin: (
    args: {
      overrides?: UserOperationOverrides;
    } & InstallMultiOwnerPluginParams &
      GetAccountParameter<TAccount>,
  ) => Promise<SendUserOperationResult>;
};

type ReadAndEncodeActions<
  TAccount extends SmartContractAccount | undefined =
    | SmartContractAccount
    | undefined,
> = {
  encodeUpdateOwners: (
    args: Pick<
      EncodeFunctionDataParameters<
        typeof MultiOwnerPluginExecutionFunctionAbi,
        "updateOwners"
      >,
      "args"
    >,
  ) => Hex;

  encodeEip712Domain: (
    args: Pick<
      EncodeFunctionDataParameters<
        typeof MultiOwnerPluginExecutionFunctionAbi,
        "eip712Domain"
      >,
      "args"
    >,
  ) => Hex;

  readEip712Domain: (
    args: GetAccountParameter<TAccount>,
  ) => Promise<
    ReadContractReturnType<
      typeof MultiOwnerPluginExecutionFunctionAbi,
      "eip712Domain"
    >
  >;

  encodeIsValidSignature: (
    args: Pick<
      EncodeFunctionDataParameters<
        typeof MultiOwnerPluginExecutionFunctionAbi,
        "isValidSignature"
      >,
      "args"
    >,
  ) => Hex;

  readIsValidSignature: (
    args: Pick<
      EncodeFunctionDataParameters<
        typeof MultiOwnerPluginExecutionFunctionAbi,
        "isValidSignature"
      >,
      "args"
    > &
      GetAccountParameter<TAccount>,
  ) => Promise<
    ReadContractReturnType<
      typeof MultiOwnerPluginExecutionFunctionAbi,
      "isValidSignature"
    >
  >;
};

export type MultiOwnerPluginActions<
  TAccount extends SmartContractAccount | undefined =
    | SmartContractAccount
    | undefined,
> = ExecutionActions<TAccount> &
  ManagementActions<TAccount> &
  ReadAndEncodeActions<TAccount>;

const addresses = {
  10: "0xcE0000007B008F50d762D155002600004cD6c647" as Address,
  137: "0xcE0000007B008F50d762D155002600004cD6c647" as Address,
  8453: "0xcE0000007B008F50d762D155002600004cD6c647" as Address,
  42161: "0xcE0000007B008F50d762D155002600004cD6c647" as Address,
  80001: "0xcE0000007B008F50d762D155002600004cD6c647" as Address,
  84532: "0xcE0000007B008F50d762D155002600004cD6c647" as Address,
  421614: "0xcE0000007B008F50d762D155002600004cD6c647" as Address,
  11155111: "0xcE0000007B008F50d762D155002600004cD6c647" as Address,
  11155420: "0xcE0000007B008F50d762D155002600004cD6c647" as Address,
} as Record<number, Address>;

export const MultiOwnerPlugin: Plugin<typeof MultiOwnerPluginAbi> = {
  meta: {
    name: "Multi Owner Plugin",
    version: "1.0.0",
    addresses,
  },
  getContract: <C extends Client>(
    client: C,
    address?: Address,
  ): GetContractReturnType<
    typeof MultiOwnerPluginAbi,
    PublicClient,
    Address
  > => {
    if (!client.chain) throw new ChainNotFoundError();

    return getContract({
      address: address || addresses[client.chain.id],
      abi: MultiOwnerPluginAbi,
      client: client,
    });
  },
};

export const multiOwnerPluginActions: <
  TTransport extends Transport = Transport,
  TChain extends Chain | undefined = Chain | undefined,
  TAccount extends SmartContractAccount | undefined =
    | SmartContractAccount
    | undefined,
>(
  client: Client<TTransport, TChain, TAccount>,
) => MultiOwnerPluginActions<TAccount> = (client) => ({
  updateOwners({ args, overrides, account = client.account }) {
    if (!account) {
      throw new AccountNotFoundError();
    }
    if (!isSmartAccountClient(client)) {
      throw new IncompatibleClientError(
        "SmartAccountClient",
        "updateOwners",
        client,
      );
    }

    const uo = encodeFunctionData({
      abi: MultiOwnerPluginExecutionFunctionAbi,
      functionName: "updateOwners",
      args,
    });

    return client.sendUserOperation({ uo, overrides, account });
  },
  installMultiOwnerPlugin({ account = client.account, overrides, ...params }) {
    if (!account) {
      throw new AccountNotFoundError();
    }

    if (!isSmartAccountClient(client)) {
      throw new IncompatibleClientError(
        "SmartAccountClient",
        "installMultiOwnerPlugin",
        client,
      );
    }

    const chain = client.chain;
    if (!chain) {
      throw new ChainNotFoundError();
    }

    const dependencies = params.dependencyOverrides ?? [];
    const pluginAddress =
      params.pluginAddress ??
      (MultiOwnerPlugin.meta.addresses[chain.id] as Address | undefined);

    if (!pluginAddress) {
      throw new Error(
        "missing MultiOwnerPlugin address for chain " + chain.name,
      );
    }

    return installPlugin_(client, {
      pluginAddress,
      pluginInitData: encodeAbiParameters([{ type: "address[]" }], params.args),
      dependencies,
      overrides,
      account,
    });
  },
  encodeUpdateOwners({ args }) {
    return encodeFunctionData({
      abi: MultiOwnerPluginExecutionFunctionAbi,
      functionName: "updateOwners",
      args,
    });
  },
  encodeEip712Domain() {
    return encodeFunctionData({
      abi: MultiOwnerPluginExecutionFunctionAbi,
      functionName: "eip712Domain",
    });
  },

  async readEip712Domain({ account = client.account }) {
    if (!account) {
      throw new AccountNotFoundError();
    }

    if (!isSmartAccountClient(client)) {
      throw new IncompatibleClientError(
        "SmartAccountClient",
        "readEip712Domain",
        client,
      );
    }

    return client.readContract({
      address: account.address,
      abi: MultiOwnerPluginExecutionFunctionAbi,
      functionName: "eip712Domain",
    });
  },
  encodeIsValidSignature({ args }) {
    return encodeFunctionData({
      abi: MultiOwnerPluginExecutionFunctionAbi,
      functionName: "isValidSignature",
      args,
    });
  },

  async readIsValidSignature({ args, account = client.account }) {
    if (!account) {
      throw new AccountNotFoundError();
    }

    if (!isSmartAccountClient(client)) {
      throw new IncompatibleClientError(
        "SmartAccountClient",
        "readIsValidSignature",
        client,
      );
    }

    return client.readContract({
      address: account.address,
      abi: MultiOwnerPluginExecutionFunctionAbi,
      functionName: "isValidSignature",
      args,
    });
  },
});

export const MultiOwnerPluginExecutionFunctionAbi = [
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [
      { name: "ownersToAdd", internalType: "address[]", type: "address[]" },
      { name: "ownersToRemove", internalType: "address[]", type: "address[]" },
    ],
    name: "updateOwners",
    outputs: [],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [],
    name: "eip712Domain",
    outputs: [
      { name: "fields", internalType: "bytes1", type: "bytes1" },
      { name: "name", internalType: "string", type: "string" },
      { name: "version", internalType: "string", type: "string" },
      { name: "chainId", internalType: "uint256", type: "uint256" },
      { name: "verifyingContract", internalType: "address", type: "address" },
      { name: "salt", internalType: "bytes32", type: "bytes32" },
      { name: "extensions", internalType: "uint256[]", type: "uint256[]" },
    ],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [
      { name: "digest", internalType: "bytes32", type: "bytes32" },
      { name: "signature", internalType: "bytes", type: "bytes" },
    ],
    name: "isValidSignature",
    outputs: [{ name: "", internalType: "bytes4", type: "bytes4" }],
  },
] as const;

export const MultiOwnerPluginAbi = [
  {
    stateMutability: "view",
    type: "function",
    inputs: [],
    name: "eip712Domain",
    outputs: [
      { name: "fields", internalType: "bytes1", type: "bytes1" },
      { name: "name", internalType: "string", type: "string" },
      { name: "version", internalType: "string", type: "string" },
      { name: "chainId", internalType: "uint256", type: "uint256" },
      { name: "verifyingContract", internalType: "address", type: "address" },
      { name: "salt", internalType: "bytes32", type: "bytes32" },
      { name: "extensions", internalType: "uint256[]", type: "uint256[]" },
    ],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [
      { name: "account", internalType: "address", type: "address" },
      { name: "message", internalType: "bytes", type: "bytes" },
    ],
    name: "encodeMessageData",
    outputs: [{ name: "", internalType: "bytes", type: "bytes" }],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [
      { name: "account", internalType: "address", type: "address" },
      { name: "message", internalType: "bytes", type: "bytes" },
    ],
    name: "getMessageHash",
    outputs: [{ name: "", internalType: "bytes32", type: "bytes32" }],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [
      { name: "account", internalType: "address", type: "address" },
      { name: "ownerToCheck", internalType: "address", type: "address" },
    ],
    name: "isOwnerOf",
    outputs: [{ name: "", internalType: "bool", type: "bool" }],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [
      { name: "digest", internalType: "bytes32", type: "bytes32" },
      { name: "signature", internalType: "bytes", type: "bytes" },
    ],
    name: "isValidSignature",
    outputs: [{ name: "", internalType: "bytes4", type: "bytes4" }],
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [{ name: "data", internalType: "bytes", type: "bytes" }],
    name: "onInstall",
    outputs: [],
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [{ name: "", internalType: "bytes", type: "bytes" }],
    name: "onUninstall",
    outputs: [],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [{ name: "account", internalType: "address", type: "address" }],
    name: "ownersOf",
    outputs: [{ name: "", internalType: "address[]", type: "address[]" }],
  },
  {
    stateMutability: "pure",
    type: "function",
    inputs: [],
    name: "pluginManifest",
    outputs: [
      {
        name: "",
        internalType: "struct PluginManifest",
        type: "tuple",
        components: [
          { name: "interfaceIds", internalType: "bytes4[]", type: "bytes4[]" },
          {
            name: "dependencyInterfaceIds",
            internalType: "bytes4[]",
            type: "bytes4[]",
          },
          {
            name: "executionFunctions",
            internalType: "bytes4[]",
            type: "bytes4[]",
          },
          {
            name: "permittedExecutionSelectors",
            internalType: "bytes4[]",
            type: "bytes4[]",
          },
          {
            name: "permitAnyExternalAddress",
            internalType: "bool",
            type: "bool",
          },
          { name: "canSpendNativeToken", internalType: "bool", type: "bool" },
          {
            name: "permittedExternalCalls",
            internalType: "struct ManifestExternalCallPermission[]",
            type: "tuple[]",
            components: [
              {
                name: "externalAddress",
                internalType: "address",
                type: "address",
              },
              { name: "permitAnySelector", internalType: "bool", type: "bool" },
              { name: "selectors", internalType: "bytes4[]", type: "bytes4[]" },
            ],
          },
          {
            name: "userOpValidationFunctions",
            internalType: "struct ManifestAssociatedFunction[]",
            type: "tuple[]",
            components: [
              {
                name: "executionSelector",
                internalType: "bytes4",
                type: "bytes4",
              },
              {
                name: "associatedFunction",
                internalType: "struct ManifestFunction",
                type: "tuple",
                components: [
                  {
                    name: "functionType",
                    internalType: "enum ManifestAssociatedFunctionType",
                    type: "uint8",
                  },
                  { name: "functionId", internalType: "uint8", type: "uint8" },
                  {
                    name: "dependencyIndex",
                    internalType: "uint256",
                    type: "uint256",
                  },
                ],
              },
            ],
          },
          {
            name: "runtimeValidationFunctions",
            internalType: "struct ManifestAssociatedFunction[]",
            type: "tuple[]",
            components: [
              {
                name: "executionSelector",
                internalType: "bytes4",
                type: "bytes4",
              },
              {
                name: "associatedFunction",
                internalType: "struct ManifestFunction",
                type: "tuple",
                components: [
                  {
                    name: "functionType",
                    internalType: "enum ManifestAssociatedFunctionType",
                    type: "uint8",
                  },
                  { name: "functionId", internalType: "uint8", type: "uint8" },
                  {
                    name: "dependencyIndex",
                    internalType: "uint256",
                    type: "uint256",
                  },
                ],
              },
            ],
          },
          {
            name: "preUserOpValidationHooks",
            internalType: "struct ManifestAssociatedFunction[]",
            type: "tuple[]",
            components: [
              {
                name: "executionSelector",
                internalType: "bytes4",
                type: "bytes4",
              },
              {
                name: "associatedFunction",
                internalType: "struct ManifestFunction",
                type: "tuple",
                components: [
                  {
                    name: "functionType",
                    internalType: "enum ManifestAssociatedFunctionType",
                    type: "uint8",
                  },
                  { name: "functionId", internalType: "uint8", type: "uint8" },
                  {
                    name: "dependencyIndex",
                    internalType: "uint256",
                    type: "uint256",
                  },
                ],
              },
            ],
          },
          {
            name: "preRuntimeValidationHooks",
            internalType: "struct ManifestAssociatedFunction[]",
            type: "tuple[]",
            components: [
              {
                name: "executionSelector",
                internalType: "bytes4",
                type: "bytes4",
              },
              {
                name: "associatedFunction",
                internalType: "struct ManifestFunction",
                type: "tuple",
                components: [
                  {
                    name: "functionType",
                    internalType: "enum ManifestAssociatedFunctionType",
                    type: "uint8",
                  },
                  { name: "functionId", internalType: "uint8", type: "uint8" },
                  {
                    name: "dependencyIndex",
                    internalType: "uint256",
                    type: "uint256",
                  },
                ],
              },
            ],
          },
          {
            name: "executionHooks",
            internalType: "struct ManifestExecutionHook[]",
            type: "tuple[]",
            components: [
              {
                name: "executionSelector",
                internalType: "bytes4",
                type: "bytes4",
              },
              {
                name: "preExecHook",
                internalType: "struct ManifestFunction",
                type: "tuple",
                components: [
                  {
                    name: "functionType",
                    internalType: "enum ManifestAssociatedFunctionType",
                    type: "uint8",
                  },
                  { name: "functionId", internalType: "uint8", type: "uint8" },
                  {
                    name: "dependencyIndex",
                    internalType: "uint256",
                    type: "uint256",
                  },
                ],
              },
              {
                name: "postExecHook",
                internalType: "struct ManifestFunction",
                type: "tuple",
                components: [
                  {
                    name: "functionType",
                    internalType: "enum ManifestAssociatedFunctionType",
                    type: "uint8",
                  },
                  { name: "functionId", internalType: "uint8", type: "uint8" },
                  {
                    name: "dependencyIndex",
                    internalType: "uint256",
                    type: "uint256",
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    stateMutability: "pure",
    type: "function",
    inputs: [],
    name: "pluginMetadata",
    outputs: [
      {
        name: "",
        internalType: "struct PluginMetadata",
        type: "tuple",
        components: [
          { name: "name", internalType: "string", type: "string" },
          { name: "version", internalType: "string", type: "string" },
          { name: "author", internalType: "string", type: "string" },
          {
            name: "permissionDescriptors",
            internalType: "struct SelectorPermission[]",
            type: "tuple[]",
            components: [
              {
                name: "functionSelector",
                internalType: "bytes4",
                type: "bytes4",
              },
              {
                name: "permissionDescription",
                internalType: "string",
                type: "string",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [
      { name: "functionId", internalType: "uint8", type: "uint8" },
      { name: "preExecHookData", internalType: "bytes", type: "bytes" },
    ],
    name: "postExecutionHook",
    outputs: [],
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [
      { name: "functionId", internalType: "uint8", type: "uint8" },
      { name: "sender", internalType: "address", type: "address" },
      { name: "value", internalType: "uint256", type: "uint256" },
      { name: "data", internalType: "bytes", type: "bytes" },
    ],
    name: "preExecutionHook",
    outputs: [{ name: "", internalType: "bytes", type: "bytes" }],
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [
      { name: "functionId", internalType: "uint8", type: "uint8" },
      { name: "sender", internalType: "address", type: "address" },
      { name: "value", internalType: "uint256", type: "uint256" },
      { name: "data", internalType: "bytes", type: "bytes" },
    ],
    name: "preRuntimeValidationHook",
    outputs: [],
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [
      { name: "functionId", internalType: "uint8", type: "uint8" },
      {
        name: "userOp",
        internalType: "struct UserOperation",
        type: "tuple",
        components: [
          { name: "sender", internalType: "address", type: "address" },
          { name: "nonce", internalType: "uint256", type: "uint256" },
          { name: "initCode", internalType: "bytes", type: "bytes" },
          { name: "callData", internalType: "bytes", type: "bytes" },
          { name: "callGasLimit", internalType: "uint256", type: "uint256" },
          {
            name: "verificationGasLimit",
            internalType: "uint256",
            type: "uint256",
          },
          {
            name: "preVerificationGas",
            internalType: "uint256",
            type: "uint256",
          },
          { name: "maxFeePerGas", internalType: "uint256", type: "uint256" },
          {
            name: "maxPriorityFeePerGas",
            internalType: "uint256",
            type: "uint256",
          },
          { name: "paymasterAndData", internalType: "bytes", type: "bytes" },
          { name: "signature", internalType: "bytes", type: "bytes" },
        ],
      },
      { name: "userOpHash", internalType: "bytes32", type: "bytes32" },
    ],
    name: "preUserOpValidationHook",
    outputs: [{ name: "", internalType: "uint256", type: "uint256" }],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [
      { name: "functionId", internalType: "uint8", type: "uint8" },
      { name: "sender", internalType: "address", type: "address" },
      { name: "", internalType: "uint256", type: "uint256" },
      { name: "", internalType: "bytes", type: "bytes" },
    ],
    name: "runtimeValidationFunction",
    outputs: [],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [{ name: "interfaceId", internalType: "bytes4", type: "bytes4" }],
    name: "supportsInterface",
    outputs: [{ name: "", internalType: "bool", type: "bool" }],
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [
      { name: "ownersToAdd", internalType: "address[]", type: "address[]" },
      { name: "ownersToRemove", internalType: "address[]", type: "address[]" },
    ],
    name: "updateOwners",
    outputs: [],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [
      { name: "functionId", internalType: "uint8", type: "uint8" },
      {
        name: "userOp",
        internalType: "struct UserOperation",
        type: "tuple",
        components: [
          { name: "sender", internalType: "address", type: "address" },
          { name: "nonce", internalType: "uint256", type: "uint256" },
          { name: "initCode", internalType: "bytes", type: "bytes" },
          { name: "callData", internalType: "bytes", type: "bytes" },
          { name: "callGasLimit", internalType: "uint256", type: "uint256" },
          {
            name: "verificationGasLimit",
            internalType: "uint256",
            type: "uint256",
          },
          {
            name: "preVerificationGas",
            internalType: "uint256",
            type: "uint256",
          },
          { name: "maxFeePerGas", internalType: "uint256", type: "uint256" },
          {
            name: "maxPriorityFeePerGas",
            internalType: "uint256",
            type: "uint256",
          },
          { name: "paymasterAndData", internalType: "bytes", type: "bytes" },
          { name: "signature", internalType: "bytes", type: "bytes" },
        ],
      },
      { name: "userOpHash", internalType: "bytes32", type: "bytes32" },
    ],
    name: "userOpValidationFunction",
    outputs: [{ name: "", internalType: "uint256", type: "uint256" }],
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "account",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "addedOwners",
        internalType: "address[]",
        type: "address[]",
        indexed: false,
      },
      {
        name: "removedOwners",
        internalType: "address[]",
        type: "address[]",
        indexed: false,
      },
    ],
    name: "OwnerUpdated",
  },
  { type: "error", inputs: [], name: "AlreadyInitialized" },
  { type: "error", inputs: [], name: "EmptyOwnersNotAllowed" },
  { type: "error", inputs: [], name: "InvalidAction" },
  {
    type: "error",
    inputs: [{ name: "owner", internalType: "address", type: "address" }],
    name: "InvalidOwner",
  },
  { type: "error", inputs: [], name: "NotAuthorized" },
  {
    type: "error",
    inputs: [{ name: "caller", internalType: "address", type: "address" }],
    name: "NotContractCaller",
  },
  {
    type: "error",
    inputs: [
      { name: "selector", internalType: "bytes4", type: "bytes4" },
      { name: "functionId", internalType: "uint8", type: "uint8" },
    ],
    name: "NotImplemented",
  },
  { type: "error", inputs: [], name: "NotInitialized" },
  {
    type: "error",
    inputs: [{ name: "owner", internalType: "address", type: "address" }],
    name: "OwnerDoesNotExist",
  },
] as const;
