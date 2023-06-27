import { Avatar, AvatarGroup, Box, Divider, ImageList, ImageListItem, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material'
import React from 'react'

const Rightbar = () => {
  return (
    <Box flex={2} p={2} sx={{ display: {xs: "none", sm: "block"} }}>
      <Box position="fixed" width={250}>
        <Typography variant='h6' fontWeight={100} mt={2}>
          Online Friends
        </Typography>
        <AvatarGroup max={4}>
          <Avatar alt="Remy Sharp" src="https://images.pexels.com/photos/4050291/pexels-photo-4050291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
          <Avatar alt="Travis Howard" src="https://images.pexels.com/photos/3768911/pexels-photo-3768911.jpeg?auto=compress&cs=tinysrgb&w=600" />
          <Avatar alt="Cindy Baker" src="https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg?auto=compress&cs=tinysrgb&w=600" />
          <Avatar alt="Agnes Walker" src="https://images.pexels.com/photos/1181280/pexels-photo-1181280.jpeg?auto=compress&cs=tinysrgb&w=600" />
          <Avatar alt="Trevor Henderson" src="https://images.pexels.com/photos/52608/pexels-photo-52608.jpeg?auto=compress&cs=tinysrgb&w=600" />
          <Avatar alt="Trevor Henderson" src="https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=600" />
          <Avatar alt="Trevor Henderson" src="https://images.pexels.com/photos/4974915/pexels-photo-4974915.jpeg?auto=compress&cs=tinysrgb&w=600" />
          <Avatar alt="Trevor Henderson" src="https://images.pexels.com/photos/5473956/pexels-photo-5473956.jpeg?auto=compress&cs=tinysrgb&w=600" />
          <Avatar alt="Trevor Henderson" src="https://images.pexels.com/photos/2036656/pexels-photo-2036656.jpeg?auto=compress&cs=tinysrgb&w=600" />
          <Avatar alt="Remy Sharp" src="https://images.pexels.com/photos/4050291/pexels-photo-4050291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
          <Avatar alt="Travis Howard" src="https://images.pexels.com/photos/3768911/pexels-photo-3768911.jpeg?auto=compress&cs=tinysrgb&w=600" />
          <Avatar alt="Cindy Baker" src="https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg?auto=compress&cs=tinysrgb&w=600" />
          <Avatar alt="Agnes Walker" src="https://images.pexels.com/photos/1181280/pexels-photo-1181280.jpeg?auto=compress&cs=tinysrgb&w=600" />
          <Avatar alt="Trevor Henderson" src="https://images.pexels.com/photos/52608/pexels-photo-52608.jpeg?auto=compress&cs=tinysrgb&w=600" />
          <Avatar alt="Trevor Henderson" src="https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=600" />
          <Avatar alt="Trevor Henderson" src="https://images.pexels.com/photos/4974915/pexels-photo-4974915.jpeg?auto=compress&cs=tinysrgb&w=600" />
          <Avatar alt="Trevor Henderson" src="https://images.pexels.com/photos/5473956/pexels-photo-5473956.jpeg?auto=compress&cs=tinysrgb&w=600" />
          <Avatar alt="Trevor Henderson" src="https://images.pexels.com/photos/2036656/pexels-photo-2036656.jpeg?auto=compress&cs=tinysrgb&w=600" />
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
          <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
        </AvatarGroup>
        <Typography variant='h6' fontWeight={100} mt={2}>
          Latest Photos
        </Typography>
        <ImageList cols={3} rowHeight={100} gap="5px">
          <ImageListItem>
            <img 
              src="https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62" 
              alt="Candle" 
            />
          </ImageListItem>
          <ImageListItem>
            <img 
              src="https://images.unsplash.com/photo-1516802273409-68526ee1bdd6" 
              alt="Basketball" 
            />
          </ImageListItem>
          <ImageListItem>
            <img 
              src="https://images.unsplash.com/photo-1518756131217-31eb79b20e8f" 
              alt="Fern" 
            />
          </ImageListItem>
        </ImageList>
        <Typography variant='h6' fontWeight={100} mt={2}>
          Latest Conversations
        </Typography>
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src="https://images.pexels.com/photos/4050291/pexels-photo-4050291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
            </ListItemAvatar>
            <ListItemText
              primary="Brunch this weekend?"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Ali Connors
                  </Typography>
                  {" — I'll be in your neighborhood doing errands this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Travis Howard" src="https://images.unsplash.com/photo-1518756131217-31eb79b20e8f" />
            </ListItemAvatar>
            <ListItemText
              primary="Summer BBQ"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    to Scott, Alex, Jennifer
                  </Typography>
                  {" — Wish I could come, but I'm out of town this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Cindy Baker" src="https://images.pexels.com/photos/2036656/pexels-photo-2036656.jpeg?auto=compress&cs=tinysrgb&w=600" />
            </ListItemAvatar>
            <ListItemText
              primary="Oui Oui"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Sandra Adams
                  </Typography>
                  {' — Do you have Paris recommendations? Have you ever…'}
                </React.Fragment>
              }
            />
          </ListItem>
        </List>
      </Box>
    </Box>
  )
}

export default Rightbar

