import styled from "styled-components"

export const AboutSectionStyle = styled.div`

.about {
   $cubic: cubic-bezier(0.64, 0.01, 0.07, 1.65);
   $transition: 0.6s $cubic;
   $size: 40px;
   position: fixed;
   z-index: 10;
   bottom: 10px;
   right: 10px;
   width: $size;
   height: $size;
   display: flex;
   justify-content: center;
   align-items: center;
   transition: all 0.2s ease;

   .bg_links {
      width: $size;
      height: $size;
      border-radius: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: rgba(#fff, 0.2);
      border-radius: 100%;
      backdrop-filter: blur(5px);
      position: absolute;
   }

   .logo {
      width: $size;
      height: $size;
      z-index: 9;
      background-image: url(https://rafaelalucas91.github.io/assets/codepen/logo_white.svg);
      background-size: 50%;
      background-repeat: no-repeat;
      background-position: 10px 7px;
      opacity: 0.9;
      transition: all 1s 0.2s ease;
      bottom: 0;
      right: 0;
   }

   .social {
      opacity: 0;
      right: 0;
      bottom: 0;

      .icon {
         width: 100%;
         height: 100%;
         background-size: 20px;
         background-repeat: no-repeat;
         background-position: center;
         background-color: transparent;
         display: flex;
         transition: all 0.2s ease, background-color 0.4s ease;
         opacity: 0;
         border-radius: 100%;
      }

      &.portfolio {
         transition: all 0.8s ease;

         .icon {
            background-image: url(https://rafaelalucas91.github.io/assets/codepen/link.svg);
         }
      }

      &.dribbble {
         transition: all 0.3s ease;
         .icon {
            background-image: url(https://rafaelalucas91.github.io/assets/codepen/dribbble.svg);
         }
      }

      &.linkedin {
         transition: all 0.8s ease;
         .icon {
            background-image: url(https://rafaelalucas91.github.io/assets/codepen/linkedin.svg);
         }
      }
   }

   &:hover {
      width: 105px;
      height: 105px;
      transition: all $transition;

      .logo {
         opacity: 1;
         transition: all 0.6s ease;
      }

      .social {
         opacity: 1;

         .icon {
            opacity: 0.9;
         }

         &:hover {
            background-size: 28px;
            .icon {
               background-size: 65%;
               opacity: 1;
            }
         }

         &.portfolio {
            right: 0;
            bottom: calc(100% - 40px);
            transition: all 0.3s 0s $cubic;
            .icon {
               &:hover {
                  background-color: #698fb7;
               }
            }
         }

         &.dribbble {
            bottom: 45%;
            right: 45%;
            transition: all 0.3s 0.15s $cubic;
            .icon {
               &:hover {
                  background-color: #ea4c89;
               }
            }
         }

         &.linkedin {
            bottom: 0;
            right: calc(100% - 40px);
            transition: all 0.3s 0.25s $cubic;
            .icon {
               &:hover {
                  background-color: #0077b5;
               }
            }
         }
      }
   }
}

.wrapper {
   width: 100vw;
   margin: 0 auto;
   height: 400px;
   background-color: #161616;
   display: flex;
   justify-content: center;
   align-items: center;
   position: relative;
   transition: all 0.3s ease;
}

@media screen and (max-width: 767px) {
   .wrapper {
      height: 700px;
   }
}

.content {
   max-width: 100%;
   width: 100%;
   padding-top: 50px;
   margin: 0 auto;
   display: flex;
   justify-content: center;
   align-items: center;
}

@media screen and (max-width: 767px) {
   .content {
      flex-direction: column;
   }
}

.card {
   width: 100%;
   max-width: 300px;
   min-width: 200px;
   height: 250px;
   background-color: white;
   margin: 10px;
   border-radius: 10px;
   box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.24);
   border: 2px solid rgba(7, 7, 7, 0.12);
   font-size: 16px;   
   transition: all 0.3s ease;
   position: relative;
   display: flex;
   justify-content: center;
   align-items: center;
   flex-direction: column;
   cursor: pointer;
   transition: all 0.3s ease;
}

.icon {
   margin: 0 auto;
   width: 100%;
   height: 80px;
   max-width:80px;
   background: linear-gradient(90deg, #0080ff 0%, #44a1ff 40%, rgba(0, 0, 0, 0.28) 60%);
   border-radius: 100%;
   display: flex;
   justify-content: center;
   align-items: center;
   color: white;
   transition: all 0.8s ease;
   background-position: 0px;
   background-size: 200px;
}

.material-icons.md-18 { font-size: 18px; }
.material-icons.md-24 { font-size: 24px; }
.material-icons.md-36 { font-size: 36px; }
.material-icons.md-48 { font-size: 48px; }

.card .title {
   width: 100%;
   margin: 0;
   text-align: center;
   margin-top: 30px;
   color: black;
   font-weight: 600;
   text-transform: uppercase;
   letter-spacing: 4px;
}

.card .text {
   width: 80%;
   margin: 0 auto;
   font-size: 13px;
   text-align: center;
   margin-top: 20px;
   color: black;
   font-weight: 500;
   letter-spacing: 2px;
   opacity: 0;
   max-height:0;
   transition: all 0.3s ease;
}

.card:hover {
   height: 270px;
}

.card:hover .info {
   height: 90%;
}

.card:hover .text {
   transition: all 0.3s ease;
   opacity: 1;
   max-height:40px;
}

.card:hover .icon {
   background-color: black;
   background-position: -120px;
   transition: all 0.3s ease;
}

.card:hover .icon i {
   background: linear-gradient(90deg, #0080ff, #44a1ff);
   -webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
   opacity: 1;
   transition: all 0.3s ease;
}
`