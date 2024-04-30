import { Box, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import Videos from '../Videos/Videos'
import { useParams } from 'react-router-dom'
import { fetchFromAPI } from '../../utils/fetchFromApi'

function SearchFeed() {
  const [videos, setVideos] = useState([])
const { searchTerm } = useParams()
  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then((data) =>
      setVideos(data.items)
    )
  }, [searchTerm])
console.log(videos);
  return (
    <Box p={2} minHeight="95vh">
      <Typography
        variant="h4"
        fontWeight={900}
        color="white"
        mb={3}
        ml={{ sm: '100px' }}
      >
        search Results for: <span>{searchTerm}</span>videos
      </Typography>

      <Box display="flex">
        <Box sx={{ mr: { sm: '100px' } }} />
        {<Videos videos={videos} />}
      </Box>
    </Box>
  )
}

export default SearchFeed
