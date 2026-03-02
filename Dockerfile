# 1️⃣ Use official lightweight Nginx image
FROM nginx:stable-alpine

# 2️⃣ Remove default HTML to avoid serving unwanted files
RUN rm -rf /usr/share/nginx/html/*

# 3️⃣ Copy your app files
COPY . /usr/share/nginx/html

# 4️⃣ Switch to non-root user for security
# The default Nginx user in Alpine is 'nginx'
USER nginx

# 5️⃣ Expose port 80
EXPOSE 80

# 6️⃣ Add recommended security headers via custom config
# Create a minimal nginx.conf to enforce security
COPY nginx.conf /etc/nginx/conf.d/default.conf

# 7️⃣ Start Nginx in foreground
CMD ["nginx", "-g", "daemon off;"]
