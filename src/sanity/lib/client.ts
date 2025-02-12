import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
  token:"skgcVJf2SAQ1yZBKoJmC5sUAr3239jhRhrv6uj5oJhNhcy9XDitnoBK2BMquU1oen8rKkI90zwPQS3LfhT2HDRikJoz2Rf460y2F5hqy8uhASvGdfZ9vKftvY63pmhOFQJjTF35Y9DfwiFw5j1gCUuLNMDrtC1cbm13thvrQGTQU1xPq73x7",
})
