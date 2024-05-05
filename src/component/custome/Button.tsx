
import { styled } from '@stitches/react'
import * as Dialog from '@radix-ui/react-dialog'
import { Link } from 'react-router-dom'

const TriggerPart = styled('span', {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    borderRadius: 8,
  })
  
  const TriggerShadow = styled(TriggerPart, {
    background: 'hsl(0deg 0% 0% / 0.1)',
    transform: 'translateY(2px)',
    transition: 'transform 250ms ease-out',
  })
  
  const TriggerEdge = styled(TriggerPart, {
    background: `linear-gradient(
        to left,
        hsl(0deg 0% 69%) 0%,
        hsl(0deg 0% 85%) 8%,
        hsl(0deg 0% 85%) 92%,
        hsl(0deg 0% 69%) 100%
      )`,
  })
  
  const TriggerLabel = styled('span', {
    display: 'block',
    position: 'relative',
    borderRadius: 8,
    color: '#569AFF',
    fontSize: '14px',
    padding: '16px 24px',
    background: '#fafafa',
    transform: 'translateY(-4px)',
    width: '100%',
    userSelect: 'none',
    transition: 'transform 250ms ease-out',
  })
  
  const Trigger = styled(Dialog.Trigger, {
    marginTop:"10px",
    width:"50%",
    border: 'none',
    fontWeight: 600,
    background: 'transparent',
    position: 'relative',
    padding: 0,
    cursor: 'pointer',
    transition: 'filter 250ms ease-out',
  
    '&:hover': {
      filter: 'brightness(110%)',
  
      [`& ${TriggerLabel}`]: {
        transform: 'translateY(-6px)',
      },
  
      [`& ${TriggerShadow}`]: {
        transform: 'translateY(4px)',
      },
    },
  
    '&:active': {
      [`& ${TriggerLabel}`]: {
        transform: 'translateY(-2px)',
        transition: 'transform 34ms',
      },
  
      [`& ${TriggerShadow}`]: {
        transform: 'translateY(1px)',
        transition: 'transform 34ms',
      },
    },
  })
  
 
  interface ButtonProps {
    name: string;
    link:String
}

function Button(props: ButtonProps) {

    return (
        <div>
            <Dialog.Root   >
                <Link to={String(props.link)}>
                <Trigger>
                    <TriggerShadow />
                    <TriggerEdge />
                    <TriggerLabel>{props.name}</TriggerLabel>
                </Trigger>
                </Link>
            </Dialog.Root>
        </div>
    );
}

export default Button;