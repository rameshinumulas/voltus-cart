import { InputAdornment, IconButton } from '@mui/material';
import { Icon } from '@iconify/react';

export const getInputAdornment = (iconName, useMaterialIcon, handleShowPassword, prvState) => ({
  input: {
    startAdornment: (
      <InputAdornment position="start">
        <IconButton edge="start"
          onClick={() => handleShowPassword && handleShowPassword(!prvState)}
        >
          {iconName
           ? <Icon icon={iconName} />
           : useMaterialIcon
          }
        </IconButton>
      </InputAdornment>
    ),
  },
});
