import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import {
  demoChannelTitle,
  demoChannelUrl,
  demoThumbnailUrl,
  demoVideoUrl,
  demoVideoTitle,
} from '../../utils/constants'
import { Link } from 'react-router-dom'
import { CheckCircle } from '@mui/icons-material'

function VideoCard({
  video: {
    id: { videoId },
    snippet,
  },
}) {

  return (
    <Card
      sx={{
        width: { xs: '100%',sm:'358px', md: '320px' },
        boxShadow: 'none',
        borderRadius: 0,
      }}
    >
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <CardMedia
          image={snippet?.thumbnails?.high?.url}
          alt={snippet?.title}
          sx={{ width: {
            xs:'100%',sm:'358px',md:'320px'
          }, height: 180 }}
        />
        <CardContent sx={{ backgroundColor: '#1e1e1e', height: '106px' }}>
          <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
            <Typography variant="subtitle1" fontWeight={'bold'} color={'#fff'}>
              {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
            </Typography>
          </Link>
          <Link
            to={
              snippet?.channelId
                ? `/video/${snippet?.channelId}`
                : demoChannelUrl
            }
          >
            <Typography variant="subtitle2" fontWeight={'bold'} color={'gray'}>
              {snippet?.channelTitle || demoChannelTitle}
              <CheckCircle sx={{ fontSize: 12, color: 'gray', ml: '5px' }} />
            </Typography>
          </Link>
        </CardContent>
      </Link>
    </Card>
  )
}

export default VideoCard
