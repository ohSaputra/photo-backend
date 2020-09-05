FROM node:12

# Add package file
COPY package*.json ./

# Install deps
RUN yarn

# Copy source
COPY . .

# Build dist
RUN yarn build

# Expose port 8888
EXPOSE 8888

CMD yarn start
