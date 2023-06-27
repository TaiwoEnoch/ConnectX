import { Avatar, Box, Button, ButtonGroup, Fab, Modal, Stack, styled, TextField, Tooltip, Typography } from '@mui/material'
import {Add as AddIcon, DateRange, EmojiEmotionsTwoTone, InsertPhotoTwoTone, PersonAddTwoTone, VideoCameraBackTwoTone} from '@mui/icons-material'
import React, { useState } from 'react';

const StyledModal = styled(Modal)({
  display:"flex",
  alignItems:"center",
  justifyContent:"center"
})

const UserBox = styled(Box)({
  display:"flex",
  alignItems:"center",
  gap: "10px",
  marginBottom: "20px"
})

const Add = () => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <Tooltip onClick={(e) => setOpen(true)}
        title="Delete" 
        sx={{
          position:"fixed", 
          bottom:20, 
          left:{xs:"calc(45%)", md:30}
        }}
      >
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Tooltip>
      <StyledModal
        open={open}
        onClose={(e) => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box 
          borderRadius={5} 
          width={400} 
          height={280} 
          bgcolor={"background.default"} 
          color={"text.primary"} 
          p={3}
        >
          <Typography variant='h6' color="gray" textAlign="center">
            Create Post
          </Typography>
          <UserBox>
            <Avatar 
              alt="Trevor Henderson" 
              src="https://images.pexels.com/photos/2036656/pexels-photo-2036656.jpeg?auto=compress&cs=tinysrgb&w=600" 
              sx={{ width: 30, height: 30 }}
            />
            <Typography fontWeight={500} variant="span">
              Taiwo Enoch
            </Typography>
          </UserBox>
          <TextField
            sx={{width:"100%"}}
            id="standard-multiline-static"
            multiline
            rows={3}
            placeholder="What's on your mind?"
            variant="standard"
          />
          <Stack direction="row" gap={1} mt={2} mb={3}>
            <EmojiEmotionsTwoTone color="primary"/>
            <VideoCameraBackTwoTone color="secondary"/>
            <PersonAddTwoTone color="success"/>
            <InsertPhotoTwoTone color="error"/>
          </Stack>
          <ButtonGroup 
            fullWidth
            variant="contained" 
            aria-label="outlined primary button group">
            <Button>Post</Button>
            <Button sx={{width:"100px"}}>
              <DateRange />
            </Button>
          </ButtonGroup>
        </Box>
      </StyledModal>
    </>
  )
}

export default Add