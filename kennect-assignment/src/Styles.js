import { styled } from '@mui/system';
import { Paper } from '@mui/material';

export const ContainerStyled = styled('div')(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: theme.spacing(4),
}));

export const PostsContainerStyled = styled('div')(({ theme }) => ({
  marginTop: theme.spacing(2),
}));

export const PostStyled = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  marginBottom: theme.spacing(2),
}));

export const CommentsContainerStyled = styled('div')(({ theme }) => ({
  marginTop: theme.spacing(1),
}));

export const CommentStyled = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1),
  marginBottom: theme.spacing(1),
}));

export const MessageStyled = styled('div')(({ theme }) => ({
  padding: theme.spacing(2),
  marginBottom: theme.spacing(2),
  borderRadius: theme.shape.borderRadius,
}));

export const LoadingIndicatorStyled = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '100px',
}));
