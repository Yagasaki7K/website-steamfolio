import styled from "styled-components";

const SteamDetails = styled.div`
@import url('https://fonts.cdnfonts.com/css/motiva-sans');

    .background {
        width: 100%;
        height: 100vh;
        /* background: url(background-cuttie.gif); */
        background: url(background-halloween.gif);
        position: fixed;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        content: '';
        z-index: -1;
    }

    .content {
        height: 16rem;
        width: 61rem;
        margin: 0 auto;
        display: flex;
        content: '';
        background: rgba(0, 0, 0, 0.6);
        color: #fff;
        font-family: "Motiva Sans", Sans-serif;
        padding: 2rem;

        .header {
            display: flex;

            .avatar {
                width: 11rem;
                height: 11rem;
                
                img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }

                .border {
                    width: 13rem;
                    height: 13rem;
                    position: absolute;
                    margin-left: -12rem;
                    margin-top: -1rem;
                }
            }
            
            .nickname {
                line-height: 40px;
                color: #ffffff;
                text-overflow: ellipsis;
                white-space: nowrap;
                overflow: hidden;
                padding: 0 2rem;
                width: 22.5rem;

                h2 {
                    font-weight: 100;
                    font-family: "Motiva Sans", Sans-serif;
                    margin-top: -0.3rem;
                }

                .subnick {
                    display: flex;
                    color: #c4c4c4;
                    font-size: 14px;
                    margin-top: -0.5rem;
                    align-items: center;
                    text-align: center;

                    .city {
                        margin-left: 0.7rem;
                    }
                }

                .info {
                    display: flex;
                    flex-direction: column;

                    p {
                        color: #54a5d4;
                        font-size: 18px;
                    }

                    i {
                        color: #c4c4c4;
                        font-size: 15px;
                    }

                    a {
                        color: #fff;
                        font-size: 14px;
                        text-decoration: none;

                        &:hover {
                            color: #54a5d4;
                        }
                    }
                }
            }

            .level {
                margin: 0.5rem 0 0 4rem;
                width: 17rem;

                h2 {
                    font-weight: 100;

                    span {
                        border: 2px solid #ff8fb4;
                        border-radius: 50px;
                        padding: 0.3rem;
                        font-size: 18px;
                    }
                }

                .badge {
                    margin: 1.1rem 0 1.1rem 0;
                    padding: 0.5rem;
                    display: flex;
                    align-items: center;
                    background: rgba(0, 0, 0, 0.6);
                    width: 99%;

                    .leftContent {
                        img {
                            width: 3rem;
                        }
                    }
                    
                    .rightContent {
                        display: flex;
                        flex-direction: column;
                        margin-left: 1rem;

                        h4 {
                            font-weight: 100;
                            font-size: 14px;
                        }

                        p {
                            font-size: 14px;
                        }
                    }
                }

                .buttons {
                    margin-top: 0.5rem;
                    display: flex;
                    align-items: center;

                    button {
                        background: rgba(0, 0, 0, 0.6);
                        color: #c4c4c4;
                        padding: 0.5rem 0.6rem;
                        border: none;
                        margin-top: -4px;
                        margin-right: 0.25rem;
                        font-size: 15px;
                        cursor: pointer;
                        transition: 0.5s;

                        &:hover {
                            background: rgba(0, 0, 0, 0.8);
                            color: #fff;
                        }
                    }

                    .award, .avatar {
                        padding: 0.3rem;
                        margin-right: 0.42rem;
                        background: rgba(0, 0, 0, 0.6);
                    }

                    .award {
                        width: 1.5rem;
                        height: 2rem;
                    }

                    .avatar {
                        width: 2rem;
                        height: 2rem;
                    }
                }
            }
        }
    }

    .body {
        width: 61rem;
        height: 44rem;
        margin: 0 auto;
        display: flex;
        flex-direction: row;
        content: '';
        background: rgba(0, 0, 0, 0.6);
        color: #fff;
        font-family: "Motiva Sans", Sans-serif;
        padding: 0rem 1rem;
        margin-bottom: 1rem;

        .subgroups {
            display: flex;
            flex-direction: column;
            max-width: 65%;
            padding-right: 1rem;
            margin-top: -1rem;
            
            .group {
                padding: 1rem 0;

                h3, p, .groupDetails {
                    padding: 1rem;
                    width: 100%;
                    backdrop-filter: blur(20px);
                    font-weight: 100;
                }

                h3 {
                    background: rgba(0, 0, 0, 0.2);
                    
                    border-radius: 7px 7px 0 0;
                }

                p {
                    background: rgba(0, 0, 0, 0.5);
                    border-radius: 0 0 7px 7px;
                    margin-bottom: 1rem;
                }

                .groupDetails {
                    display: flex;
                    flex-direction: column;
                    background: rgba(0, 0, 0, 0.5);

                    a {
                        color: #fff;
                        text-decoration: none;
                        margin: 0.5rem 0;
                        font-size: 1rem;

                        &:hover {
                            color: #54a5d4;
                            text-decoration: underline;
                        }
                    }

                    .badges {
                        padding: 1rem 0rem;
                        background: rgba(0, 0, 0, 0.8);
                        border-radius: 7px;
                        display: flex;

                        img {
                            width: 4rem;
                            margin: 0.2rem 0.5rem;
                            border: 1px solid #9b9b9b;
                            transition: 1s;

                            &:hover {
                                cursor: pointer;
                                filter: brightness(50%);
                            }
                        }

                        button {
                            width: 4rem;
                            height: 4rem;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            margin-top: 0.2rem;
                            transition: 1s;
                            background: rgba(0, 0, 0, 0.4);
                            backdrop-filter: blur(20px);
                            color: #fff;
                            font-size: 1.2rem;
                            font-family: "Motiva Sans", Sans-serif;
                            border: 1px solid #9b9b9b;

                            &:hover {
                                cursor: pointer;
                                filter: brightness(50%);
                            }
                        }
                    }
                }
            }

            
        }

        .sidebar {
            width: 40%;
            height: 43rem;
            background-color: rgba(0, 0, 0, 0.4);
            backdrop-filter: blur(20px);
            padding: 1rem;

            h2 {
                font-weight: 100;
                font-family: "Motiva Sans", Sans-serif;
                color: #54a5d4;
            }

            .title {
                margin: 1rem 0;
            }

            .links {
                display: flex;
                flex-direction: column;

                .link {
                    &:hover {
                        color: #9b9b9b;
                    }
                }

                a {
                    padding: 0.7rem 0;
                    text-decoration: none;
                    color: #fff;
                    font-size: 18px;
                    font-weight: 100;

                    span {
                        margin-left: 5px;
                        font-family: "Motiva Sans", Sans-serif;
                        font-weight: 100;
                        color: #9b9b9b;
                        font-size: 30px;
                    }
                }
                
                .badges {
                    img {
                        width: 3.5rem;
                        height: 3.5rem;
                        object-fit: cover;
                        margin-right: 1rem;
                    }
                }
            }
        }
    }
`

export default SteamDetails