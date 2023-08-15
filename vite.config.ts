import { defineConfig, splitVendorChunkPlugin } from "vite";

export default defineConfig(() => {
  {
    return {
      base: "/Personal_page/",
      plugins: [splitVendorChunkPlugin()],
      rollupOptions: {
        manualChunks: {
          vendor: ["three", "@react-three/fiber"],
        },
      },
    };
  }
});
