import styled from '@emotion/styled'
import { Box } from '@mui/system'
import React from 'react'

const WidgetWrapper = styled(Box)(({theme}) => ({
    padding: "1.5rem 1.5rem 0.75rem 1.5rem",
    backgroundColor: theme.palette.background.alt,
    borderRadius:"0.75rem"
}));

export default WidgetWrapper;