import styled from "styled-components";

const Wrapper = styled.section`

.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color:rgba(35, 38, 41, 0.4);
    color: white;
    width: 100%;
    padding: 15px 20px;
    position: fixed;
    z-index: 1000;
    height: auto;
}
/* Initials style */
.initials {
    font-size: 30px;
    background-color:rgb(243, 80, 129);
    border-radius: 50%;
    padding: 15px;
    width: 60px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
}
    .links{
    display: none;
    }


/* Menu items */
.menu {
    display: flex;
    gap: 20px;
    font-size: 15px;
}

/* Hamburger button */
.hamburger {
    display: none;
    font-size: 30px;
    cursor: pointer;
}

/* Media query for responsiveness */
@media (max-width: 768px) {
     .menu {
        display: none;
        flex-direction: column;
        gap: 15px;
        position: absolute;
        top: 90px;
        right: 0; 
        background-color: rgba(31, 30, 30, 0.6);
        padding: 20px;
        z-index: 10;
        width: 250px; 
        height: 100vh;
        font-size: 10px;
    }
        
    .links-item{
        background-color: black;
    }
    .menu.open {
        display: flex;
    }

    .hamburger {
        display: block;
    }
}
`;

export default Wrapper;
