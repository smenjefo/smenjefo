import IMFEManifest from "./IMFEManifest";

export default interface IMFEManifestLoader {
  load(): Promise<Record<string, IMFEManifest>>;
}