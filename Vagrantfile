############################################################################
############################################################################
#############       VAGRANTFILE BY BURTONTECH DEV TEAM    ##################
#############       Author: Bayman Bburton                ##################
#############       Date: 2018-09-10                      ##################
#############       Desc: Burton Universe Software        ##################
############################################################################
############################################################################


#############       Vagrant Misc Params       ##################
Vagrant.configure("2") do |config|
  config.vm.box = "gilbertoalbino/ubuntu-php7"
  # config.vm.box_check_update = false
  # config.vm.network "private_network", ip: "192.168.33.10"

#############       Define local address ##################
#############       (you can define multiple address for multiple connections)     ##################
  config.vm.network "public_network", ip: "192.168.1.230"
  config.vm.network "public_network", ip: "192.168.100.230"
  # config.vm.network "public_network", ip: "192.168.3.219"

#############       Shared folders for Host-Guest drag&drop        ##################
  config.vm.synced_folder "www", "/var/www/html"

#############       Forward Ports to Host's Localhost       ##################
  config.vm.network "forwarded_port", guest: 22, host: 2243

#############       Important: Needs vagrant-hostsupdater plugin to work        ##################
  config.vm.define :web do |web_config|
    web_config.vm.hostname = "burtoncloud.burt"
  end

#############       DEBUG PARAMETERS       ##################
  # config.vm.provider "virtualbox" do |vb|
  #    vb.gui = true
  #    vb.memory = "1024"
  # end
  # config.push.define "atlas" do |push|
  #   push.app = "YOUR_ATLAS_USERNAME/YOUR_APPLICATION_NAME"
  # end
  # config.vm.provision "shell", inline: <<-SHELL
  #   apt-get update
  #   apt-get install -y apache2
  # SHELL
end
