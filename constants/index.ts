import {
  AndroidAudioEncoder,
  AndroidOutputFormat,
  IOSAudioQuality,
  IOSOutputFormat,
} from "expo-av/build/Audio";

export const BRAND_NAME = "Brand Name";
export const BRAND_ONE_LINER = "Brand One Liner";

export const DAY_FORMAT = "MMM DD,YYYY";
// have to be constants so it shows in binary, otherwise fail apple's review
export const appleTermsOfUseLink =
  "https://www.apple.com/legal/internet-services/itunes/dev/stdeula/";

export const privacyPolicyLink = "https://www.brand-name.com/privacy-policy";

export const recordingOptions = {
  isMeteringEnabled: true,
  android: {
    extension: ".m4a",
    outputFormat: AndroidOutputFormat.MPEG_4,
    audioEncoder: AndroidAudioEncoder.AAC,
    sampleRate: 44100,
    numberOfChannels: 2,
    bitRate: 128000,
  },
  ios: {
    // . wav => wrong format header in Buffer
    // extension: ".wav",
    // outputFormat: IOSOutputFormat.LINEARPCM,
    // audioQuality: IOSAudioQuality.LOW,
    // sampleRate: 44100,
    // numberOfChannels: 2,
    // bitRate: 128000,
    // linearPCMBitDepth: 16,
    // linearPCMIsBigEndian: false,
    // linearPCMIsFloat: false,

    extension: ".m4a",
    outputFormat: IOSOutputFormat.MPEG4AAC,
    audioQuality: IOSAudioQuality.MAX,
    sampleRate: 44100,
    numberOfChannels: 2,
    bitRate: 128000,
    linearPCMBitDepth: 16,
    linearPCMIsBigEndian: false,
    linearPCMIsFloat: false,
  },
  web: {
    mimeType: "audio/webm",
    bitsPerSecond: 128000,
  },
};
