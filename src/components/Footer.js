const Footer = () => {
    return `
        <footer class="bg-[#050811] absolute z-20 text-white py-4 bottom-0 w-[300px] rounded-lg m-4 p-2">      
        <div class="container mx-auto flex text-center justify-center gap-6">
            <a href="#" class="text-xs"><img src="../assets/SVG/facebook.svg" class="w-4 mx-auto my-2"/>Facebook</a>
            <a href="#" class="text-xs"><img src="../assets/SVG/x-twitter.svg" class="w-4 mx-auto my-2"/>Twitter</a>
            <a href="#" class="text-xs"><img src="../assets/SVG/instagram.svg" class="w-4 mx-auto my-2"/>Instagram</a>
        </div>
            <div class="container mx-auto text-center mt-2">
                <p class="text-[10px] text-[#ddd]">&copy; 2024 Ready Yatra. All rights reserved.</p>
            </div>
        </footer>
    `;
};

export default Footer;