import * as React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'
import { motion } from 'framer-motion'
import { TextField, Button } from '@mui/material'
import CheckIcon from '@mui/icons-material/Check'
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
}

export default function BookTableModal() {
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <div>
      <motion.div
        onClick={handleOpen}
        className="border-2 border-[#130e0e] text-lg rounded-md p-3 w-fit cursor-pointer transition duration-300 hover:bg-[#1f1e1e] hover:text-white"
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        exit={{ y: -10, opacity: 0 }}
        transition={{ duration: 1 }}
      >
        Đặt bàn ngay
      </motion.div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Thông tin đặt bàn
          </Typography>
          <Box className="mt-3">
            <Box className="flex flex-row justify-center items-center space-x-5 my-3">
              <TextField
                id="outlined-basic"
                label="Họ và tên"
                variant="outlined"
              />
              <TextField
                id="outlined-basic"
                label="Số điện thoại"
                variant="outlined"
              />
            </Box>
            <Box className="mt-5">
              <TextField
                id="outlined-basic"
                label="Thời gian đặt bàn"
                variant="outlined"
                fullWidth
              />
            </Box>
            <Box className="mt-5">
              <Button
                color="success"
                variant="contained"
                size="large"
                startIcon={<CheckIcon />}
                fullWidth
              >
                Đặt bàn
              </Button>
            </Box>
          </Box>
        </Box>
      </Modal>
    </div>
  )
}
