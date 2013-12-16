Portal FGA
================
Temas Noosfero para o Portal FGA.


Instruções de uso
=================

1. Apagar todos os temas originais do Noosfero.
(manter base/ e noosfero/)

2. Clonar diretório para 

#public/designs/themes

3. Criar links simbólicos dos temas originais do Noosfero para os da UnB Gama

##
ln -s portal-fga-theme/aluminium/ aluminium &&
ln -s portal-fga-theme/butter/ butter &&
ln -s portal-fga-theme/chocolate/ chocolate &&
ln -s portal-fga-theme/plum/ plum &&
ln -s portal-fga-theme/skyblue/ skyblue &&
ln -s portal-fga-theme/chameleon/ chameleon &&
ln -s portal-fga-theme/orange/ orange &&
ln -s portal-fga-theme/scarletred/ scarletred &&
ln -s portal-fga-theme/unb-base/ unb-base &&
ln -s portal-fga-theme/unb-gama/ unb-gama &&
ln -s portal-fga-theme/noosfero/ noosfero &&
ln -s portal-fga-theme/unb-gama/ default
##


Estrutura de arquivos
=====================

base/
noosfero/
unb-base/
--aluminium/  
--butter/
--chameleon/
--chocolate/  
--orange/  
--plum/  
--scarletred/  
--skyblue/  
--unb-base/  
--unb-gama/
