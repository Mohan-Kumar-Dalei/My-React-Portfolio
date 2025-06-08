export const loadShader = async (shaderPath) => {
    try {
        const response = await fetch(shaderPath);
        if (!response.ok) throw new Error(`Failed to load shader: ${shaderPath}`);
        return await response.text();
    } catch (error) {
        console.error('Shader loading error:', error);
        return null;
    }
}; 