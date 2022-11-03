#version 330 core
out vec4 FragColor;

in vec3 Normal;
in vec3 itemPos;

uniform vec3 cameraPos;
uniform samplerCube skybox;

void main() {
    vec3 viewPos=normalize(itemPos-cameraPos);
    vec3 reflec=reflect(viewPos,Normal);
    FragColor=vec4(texture(skybox,reflec).rgb,1.0f);
}