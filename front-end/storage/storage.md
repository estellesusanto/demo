# How to use Google Cloud Storage to host a static front-end

## To run locally
* Find where index.html is in your Finder or local directory
* Open with Google Chrome

## Set-Up Instructions
1. Purchase a domain using a domain name registrar such as Google Domains, GoDaddy, NameCheap, etc. (optional)
2. Host front-end in the Cloud
    * [Google Cloud Storage](https://cloud.google.com/storage/docs/hosting-static-website)
3. Protect your site behind a firewall & get load balancing IP
    * [Enable load balancing on your site](https://cloud.google.com/load-balancing/docs/https/https-load-balancer-example)
4. Get HTTPS for your site (Enable SSL Certificate)
    * [Enabling SSL](https://cloud.google.com/load-balancing/docs/ssl-certificates)
5. Create A Records to point to your load balancer IP
    * (This step is only necessary if you purchased a domain)
    * Go to your domain name registrar's Advanced DNS options
    * Create a new mapping (will map test.com to IP)
        * Type: A Record
        * Host: @
        * Value: <load_balancer_IP_address>
        * TTL: Automatic
    * Create a new mapping (will map www.test.com to IP)
        * Type: A Record
        * Host: www
        * Value: <load_balancer_IP_address>
        * TTL: Automatic