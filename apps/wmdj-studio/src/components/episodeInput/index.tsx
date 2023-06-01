import React, {useEffect, useState} from 'react'
import {Card, Flex, Grid, Text} from '@sanity/ui'
import {FieldMember, MemberField, ObjectInputProps} from 'sanity'
import {getEpisodes} from './helpers/getEpisodes'
import {TransistorEpisodeInterface} from './types/transistorEpisodes'

// Create a Sanity PatchEvent based on a change in time value
// const createPatchFrom = value =>
//   PatchEvent.from(value === "" ? unset() : set(value));

export interface EpisodeInputId {
  episodeId: string
}

export type EpisodeInputProps = ObjectInputProps<EpisodeInputId>
const EpisodeInput = ({
  value,
  members,
  renderField,
  renderInput,
  renderItem,
}: EpisodeInputProps) => {
  const [data, setData] = useState<TransistorEpisodeInterface[]>([])
  useEffect(() => {
    const fetchData = async () => {
      const episodes = await getEpisodes()
      setData(episodes)
    }
    fetchData()
  }, [])
  return <Grid></Grid>
}

export default EpisodeInput
