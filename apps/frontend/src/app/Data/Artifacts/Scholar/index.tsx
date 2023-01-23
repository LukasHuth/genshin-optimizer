import { input } from '../../../Formula'
import { Data } from '../../../Formula/type'
import { greaterEq, percent } from '../../../Formula/utils'
import { ArtifactSetKey } from '../../../Types/consts'
import { ArtifactSheet, IArtifactSheet, setHeaderTemplate } from '../ArtifactSheet'
import { dataObjForArtifactSheet } from '../dataUtil'

const key: ArtifactSetKey = "Scholar"
const setHeader = setHeaderTemplate(key)

const set2 = greaterEq(input.artSet.Scholar, 2, percent(0.2))

export const data: Data = dataObjForArtifactSheet(key, {
  premod: {
    enerRech_: set2
  }
})

const sheet: IArtifactSheet = {
  name: "Scholar", rarity: [3, 4],
  setEffects: {
    2: { document: [{ header: setHeader(2), fields: [{ node: set2 }] }] },
    4: { document: [{ header: setHeader(4), fields: [] }]}
  }
}
export default new ArtifactSheet(key, sheet, data)
