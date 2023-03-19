module.exports = {
    content: ['../src/**/*/*.{astro,html,js,jsx,vue, svelte}'],
    theme:{
        extend:{

        }
    },
    plugins: [require('@tailwindcss/line-clamp')]
}