import styled from "styled-components";

const SteamDetails = styled.div`
    .background {
        width: 100%;
        height: 100vh;
        background: url(background.gif);
        position: fixed;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        content: '';
        z-index: -1;
    }

    .content {
        height: 100vh;
        width: 61rem;
        margin: 0 auto;
        display: flex;
        content: '';
        background: rgba(0, 0, 0, 0.5);
        color: #fff;
        font-family: "Motiva Sans", Sans-serif;

        
        .header {
            padding: 2rem;
            display: flex;

            .avatar {
                img {
                    border: 2px solid #54a5d4;
                    width: 11rem;
                }
            }
            
            .nickname {
                line-height: 40px;
                color: #ffffff;
                text-overflow: ellipsis;
                white-space: nowrap;
                overflow: hidden;
                padding: 0 2rem;

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
                    padding: 0.7rem 0.9rem;
                    display: flex;
                    align-items: center;
                    background: rgba(0, 0, 0, 0.5);
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
                        background: rgba(0, 0, 0, 0.5);
                        color: #c4c4c4;
                        padding: 0.5rem 0.6rem;
                        border: none;
                        margin-right: 0.25rem;
                        font-size: 15px;
                    }

                    .award, .avatar {
                        padding: 0.3rem;
                        margin-right: 0.42rem;
                        background: rgba(0, 0, 0, 0.5);
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
`

export default SteamDetails