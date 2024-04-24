import type { ArtifactSetKey, SetNum } from '@genshin-optimizer/gi/consts'
import { allArtifactSetKeys } from '@genshin-optimizer/gi/consts'
import type { UIData } from '@genshin-optimizer/gi/uidata'
import { input, mergeData } from '@genshin-optimizer/gi/wr'
import type { ArtifactSheet } from './ArtifactSheet'

import Adventurer from './Adventurer'
import ArchaicPetra from './ArchaicPetra'
import Berserker from './Berserker'
import BlizzardStrayer from './BlizzardStrayer'
import BloodstainedChivalry from './BloodstainedChivalry'
import BraveHeart from './BraveHeart'
import CrimsonWitchOfFlames from './CrimsonWitchOfFlames'
import DeepwoodMemories from './DeepwoodMemories'
import DefendersWill from './DefendersWill'
import DesertPavilionChronicle from './DesertPavilionChronicle'
import EchoesOfAnOffering from './EchoesOfAnOffering'
import EmblemOfSeveredFate from './EmblemOfSeveredFate'
import FlowerOfParadiseLost from './FlowerOfParadiseLost'
import FragmentOfHarmonicWhimsy from './FragmentOfHarmonicWhimsy'
import Gambler from './Gambler'
import GildedDreams from './GildedDreams'
import GladiatorsFinale from './GladiatorsFinale'
import GoldenTroupe from './GoldenTroupe'
import HeartOfDepth from './HeartOfDepth'
import HuskOfOpulentDreams from './HuskOfOpulentDreams'
import Instructor from './Instructor'
import Lavawalker from './Lavawalker'
import LuckyDog from './LuckyDog'
import MaidenBeloved from './MaidenBeloved'
import MarechausseeHunter from './MarechausseeHunter'
import MartialArtist from './MartialArtist'
import NighttimeWhispersInTheEchoingWoods from './NighttimeWhispersInTheEchoingWoods'
import NoblesseOblige from './NoblesseOblige'
import NymphsDream from './NymphsDream'
import OceanHuedClam from './OceanHuedClam'
import PaleFlame from './PaleFlame'
import PrayersForDestiny from './PrayersForDestiny'
import PrayersForIllumination from './PrayersForIllumination'
import PrayersForWisdom from './PrayersForWisdom'
import PrayersToSpringtime from './PrayersToSpringtime'
import ResolutionOfSojourner from './ResolutionOfSojourner'
import RetracingBolide from './RetracingBolide'
import Scholar from './Scholar'
import ShimenawasReminiscence from './ShimenawasReminiscence'
import SongOfDaysPast from './SongOfDaysPast'
import TenacityOfTheMillelith from './TenacityOfTheMillelith'
import TheExile from './TheExile'
import ThunderingFury from './ThunderingFury'
import Thundersoother from './Thundersoother'
import TinyMiracle from './TinyMiracle'
import TravelingDoctor from './TravelingDoctor'
import UnfinishedReverie from './UnfinishedReverie'
import VermillionHereafter from './VermillionHereafter'
import ViridescentVenerer from './ViridescentVenerer'
import VourukashasGlow from './VourukashasGlow'
import WanderersTroupe from './WanderersTroupe'

export const artifactSheets: Record<ArtifactSetKey, ArtifactSheet> = {
  Adventurer,
  ArchaicPetra,
  Berserker,
  BlizzardStrayer,
  BloodstainedChivalry,
  BraveHeart,
  CrimsonWitchOfFlames,
  DeepwoodMemories,
  DefendersWill,
  DesertPavilionChronicle,
  EchoesOfAnOffering,
  EmblemOfSeveredFate,
  FlowerOfParadiseLost,
  FragmentOfHarmonicWhimsy,
  Gambler,
  GildedDreams,
  GladiatorsFinale,
  GoldenTroupe,
  HeartOfDepth,
  HuskOfOpulentDreams,
  Instructor,
  Lavawalker,
  LuckyDog,
  MaidenBeloved,
  MarechausseeHunter,
  MartialArtist,
  NighttimeWhispersInTheEchoingWoods,
  NoblesseOblige,
  NymphsDream,
  OceanHuedClam,
  PaleFlame,
  PrayersForDestiny,
  PrayersForIllumination,
  PrayersForWisdom,
  PrayersToSpringtime,
  ResolutionOfSojourner,
  RetracingBolide,
  Scholar,
  ShimenawasReminiscence,
  SongOfDaysPast,
  TenacityOfTheMillelith,
  TheExile,
  ThunderingFury,
  Thundersoother,
  TinyMiracle,
  TravelingDoctor,
  UnfinishedReverie,
  VermillionHereafter,
  ViridescentVenerer,
  VourukashasGlow,
  WanderersTroupe,
} as const

export function getArtSheet(sKey: ArtifactSetKey) {
  return artifactSheets[sKey]
}

export const allArtifactData = mergeData(
  Object.values(artifactSheets).map((s) => s.data)
)
export function dataSetEffects(data: UIData) {
  const artifactSetEffect: Partial<Record<ArtifactSetKey, SetNum[]>> = {}
  allArtifactSetKeys.forEach((setKey) => {
    const sheet = getArtSheet(setKey)
    const setNums = (
      Object.keys(sheet.setEffects).map((k) => parseInt(k)) as SetNum[]
    ).filter((sn) => (data.get(input.artSet[setKey]).value ?? 0) >= sn)
    if (setNums.length) artifactSetEffect[setKey] = setNums
  })
  return artifactSetEffect
}
