import IMFEManifestLoader from "./IMFEManifestLoader";

export default class LocalEnvMFEManifestLoader implements IMFEManifestLoader {
  public load = () => {
    return Promise.resolve({
      fight: {
        url: `${
          process.env['NEXT_PUBLIC_MFE_FIGHT_PROTOCOL']
        }://${
          process.env['NEXT_PUBLIC_MFE_FIGHT_HOST']
        }:${
          process.env['NEXT_PUBLIC_MFE_FIGHT_PORT']
        }/${
          process.env['NEXT_PUBLIC_MFE_FIGHT_REMOTE_ENTRY']
        }`,

        scope: process.env['NEXT_PUBLIC_MFE_FIGHT_SCOPE'],
        module: process.env['NEXT_PUBLIC_MFE_FIGHT_MODULE'],
      },
      fightRegistration: {
        url: `${
          process.env['NEXT_PUBLIC_MFE_FIGHT_REGISTRATION_PROTOCOL']
        }://${
          process.env['NEXT_PUBLIC_MFE_FIGHT_REGISTRATION_HOST']
        }:${
          process.env['NEXT_PUBLIC_MFE_FIGHT_REGISTRATION_PORT']
        }/${
          process.env['NEXT_PUBLIC_MFE_FIGHT_REGISTRATION_REMOTE_ENTRY']
        }`,

        scope: process.env['NEXT_PUBLIC_MFE_FIGHT_REGISTRATION_SCOPE'],
        module: process.env['NEXT_PUBLIC_MFE_FIGHT_REGISTRATION_MODULE'],
      },
    });
  };
}