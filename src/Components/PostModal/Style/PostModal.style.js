import styled from '@emotion/styled';
import { Menu } from '@mui/material';

export const PostModal = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) !important;
    outline: none;
    border: none;
    border-radius: 10px;
    width: ${(props) => props.image ? '80vw' : '50vw'};
    height: 80vh;
    display: flex;
`;

export const Image = styled.div`
    flex: 1.5;
    overflow: hidden;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    img {
        width: 100%;
        height: 100%;
        object-fit: fill;
    }
    @media (max-width: 900px) {
        display: none;
    }
`;

export const CommentsSection = styled.div`
    flex: 1;
    background: #0f0f0f;
    display: flex;
    flex-direction: column;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
`;

export const CommentsSectionHeader = styled.div`
    .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 20px 20px 10px 20px;
        .user {
            display: flex;
            align-items: center;
            gap: 20px;
            &__info {
                display: flex;
                flex-direction: column;
            }
            &__position {
                font-size: 12px;
                color: #9a9a9a;
            }
            &__name {
                color: #c9c9c9;
                text-decoration: none;
                transition: all 350ms;
                cursor: pointer;
                :hover {
                    color: #FFFFFF;
                }
            }
            .MuiButton-root {
                :hover + .user__info .user__name {
                    color: #FFFFFF;
                }
                img {
                    width: 50px;
                    height: 50px;
                    border-radius: 50%;
                }
            }
        }
        .MuiIconButton-root {
            background: #222;
            :hover {
                background: #333;
                svg path {
                    fill: #FFFFFF;
                }
            }
            svg {
                path {
                    fill: #9a9a9a;
                }
            }
        }
    }
    .description {
        padding: 0 20px;
        color: #c9c9c9;
        font-size: 14px;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        overflow: hidden;
    }
`;

export const CommentsSectionBody = styled.div`
    flex: 1;
    overflow-x: hidden;
    overflow-y: auto;
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 25px;
    margin: 10px 5px 10px 0;
    .loading-container {
        height: 100%;
        display: flex;
        align-items: center;
    }
`;

export const CommentContainer = styled.div`
    display: flex;
    gap: 20px;
    .MuiButton-root {
        align-self: flex-start;
        min-width: initial;
        :hover + .comment-wrapper div .header .user .user__name {
            color: #FFFFFF;
        }
        img {
            width: 50px;
            height: 50px;
            border-radius: 50%;
        }
    }
    .comment-wrapper {
        display: flex;
        flex-direction: column;
        gap: 20px;
        flex: 1;
    }
`;

export const Comment = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    .header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 10px;
        .user {
            display: flex;
            flex-direction: column;
            &__name {
                color: #c9c9c9;
                text-decoration: none;
                cursor: pointer;
                :hover {
                    color: #FFFFFF;
                }
            }
            &__position {
                font-size: 12px;
                color: #9a9a9a;
            }
        }
        .MuiIconButton-root {
            :hover {
                background-color: #333;
            }
            svg path {
                fill: #927CD9;
            }
        }
    }
    .text {
        color: #c9c9c9;
        font-size: 14px;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        overflow: hidden;
    }
    .edit-section {
        .MuiOutlinedInput-root {
            background-color: #222;
            border-radius: 10px;
            input {
                color: #FFFFFF;
                padding: 15px 20px;
            }
            fieldset {
                border: none;
            }
        }
        &__buttons {
            display: flex;
            align-items: center;
            justify-content: flex-end;
            gap: 15px;
            margin-top: 10px;
        }
    }
    .footer {
        display: flex;
        align-items: center;
        gap: 15px;
        > * {
            font-size: 12px;
            color: #9a9a9a;
        }
        .likes {
            align-self: center;
            line-height: 18px;
            /* :hover {
                color: #FFFFFF;
            } */
        }
    }
`;

export const CommentsSectionFooter = styled.div`
    padding: 0 10px 10px;
    .tools {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 5px;
        &__like-comment {
            display: flex;
            gap: 5px;
        }
        .MuiIconButton-root {
            :hover {
                background-color: #333;
            }
            svg {
                path {
                    fill: #927CD9;
                }
            }
        }
    }
    .post-detail {
        padding: 0 10px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 5px;
        &__likes {
            padding: 0;
            background: transparent;
            font-size: 14px;
            min-width: initial;
            color: #9d9a9a;
            transition: color 350ms;
            :hover {
                color: #FFFFFf;
                background: transparent;
            }
        }
        &__date {
            color: #9d9a9a;
            font-size: 12px;
        }
    }
`;

export const CreateComment = styled.div`
    padding: 10px 0;
    .MuiFormControl-root .MuiOutlinedInput-root {
        background-color: transparent;
        color: #c9c9c9;
        input {
            padding: 10px 5px 10px 15px;
            ::placeholder {
                color: #9d9a9a;
            }
        }
        fieldset {
            border: none;
        }
        .MuiIconButton-root {
            svg {
                path {
                    fill: ${(props) => props.disabled ? '#9d9a9a' : '#c9c9c9'};
                }
            }
            :hover {
                background-color: #333;
            }
        }
    }
`;

export const CommentsSettings = styled.div`
    .setting {
        padding: 5px;
        :hover {
            background-color: #333;
        }
        svg path {
            fill: #c9c9c9;
        }
    }
`;

export const CommentSettingsMenu = styled(Menu)`
    .MuiPaper-root {
        padding: 0;
        background-color: transparent;
    }
    ul {
        background-color: #222;
        padding: 0;
        border-radius: 5px;
        li {
            display: flex;
            align-items: center;
            gap: 10px;
            color: #c9c9c9;
            padding: 10px;
            font-size: 14px;
            min-width: 120px;
            :not(:last-child) {
                border-bottom: 1px solid #333;
            }
            :hover {
                background-color: #333;
                color: #927CD9;
                    svg path {
                        fill: #927CD9;
                    }
            }
            &.delete {
                :hover {
                    color: red;
                    svg path {
                        fill: red;
                    }
                }
            }
            svg {
                font-size: 22px;
            }
        }
    }
`;