FROM php:8.2-fpm

# Устанавливаем необходимые PHP расширения
RUN apt-get update && apt-get install -y \
    libpng-dev \
    libjpeg-dev \
    libfreetype6-dev \
    libxml2-dev \
    libzip-dev \
    unzip \
    git \
    && docker-php-ext-configure gd --with-freetype --with-jpeg \
    && docker-php-ext-install gd zip pdo pdo_mysql mysqli xml opcache \
    && rm -rf /var/lib/apt/lists/*

# Устанавливаем Composer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

# Копируем php.ini
COPY php.ini /usr/local/etc/php/

RUN chmod -R 777 /tmp
# Настроим права на директории

RUN usermod -u 1000 www-data

#RUN chown -R www-data:www-data /var/www/html
#RUN chown -R www-data:www-data /var/www/html/backend
#RUN chown -R www-data:www-data backend

#RUN chmod -R 755 /var/www/html/backend
#RUN chmod -R 644 /var/www/html/backend/*.php

EXPOSE 9000

CMD ["php-fpm"]
