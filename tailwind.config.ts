import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

export default <Partial<Config>>{
    theme: {
        extend: {
            colors: {
                'woodsmoke': {
                    '50': '#d9d9d9',
                    '100': '#cccccc',
                    '200': '#b5b5b5',
                    '300': '#949494',
                    '400': '#6b6b6b',
                    '500': '#525252',
                    '600': '#404040',
                    '700': '#333333',
                    '800': '#292929',
                    '900': '#212121',
                    '950': '#141414',
                },                
                
                'perfume': {
                    '50': '#faf5ff',
                    '100': '#f2e8ff',
                    '200': '#e7d4ff',
                    '300': '#dbbfff',
                    '400': '#ba82fe',
                    '500': '#a053f9',
                    '600': '#8a31ec',
                    '700': '#7520d0',
                    '800': '#641faa',
                    '900': '#531b88',
                    '950': '#360665',
                },
            }
        }
    }
}
