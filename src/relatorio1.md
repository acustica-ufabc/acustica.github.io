---
layout: layouts/base.njk
title: Lab de Acústica
---

# Laboratório de Acústica

## Relatorio 1

 ### 3
#### A) Visão Superior, teto e lateral
![Planta da sala](./imagem1.jpg)
![Distância dos microfones](./imagem2.jpg)

#### B)
![Palco](./imagem3.jpg)
![Rampa](./imagem4.jpg)
![Cadeira](./imagem5.jpg)

#### C) Volume e área total (sem cadeiras)
$Vtotal = AxLxC = 4.00 x 9.85 x 15.53 = 611.882m³$

$Vinclinação = AxLxC/2 = 1.2 x 9.85 x 10.53/2 = 62.2323m³$

$Vrecuoteto = AxLxC = 0.64 x 9.85 x 1.5 = 9.456m³$

$V(palco + rampa) = AxLxC + AxLxC/2 = 0.4 x 7.2 x 1.8 + 0.9 x 0.4 x 7.2 /2= 5.184 + 1.296 = 6.48m³$

$Vcadeiras$ $=~ AxLxC*122 = 1.05*0.3*0.43*122 = 16.5249$

$Vtotal’ = 611.882 - 62.2323 - 9.456 - 6.48 - 16.5249 = 517.1888$


$$
Atotal = A(parede fundo) + A(parede lateral) x 2 + A(teto) + A(parede lousa) + A(piso sem cadeiras e palco) + A(cadeiras)*122*0.225 + A(palco)
= 2.8 x 9.85 + 55.2*2 + 15.53*9.85 + 33.096 + 124.962 + 12.393675 + 12.96
= 474.362175
$$

#### D)

![Imagem do auditorio](./imagem6.jpg)


### 4
#### A) 
$Test = 0,163V/A = 0.163*517.1888/474.362175 = 0.1777Ss$
#### B)
$dmin = 2√(V/cTest)=517.1888/(340*0.1777) = 0.376m$
#### C) 
        Para todas as medições recomendam-se no mínimo 3 medições para cada microfone. (Colocar os áudios em ordem)


### 5

#### A)
        Foi produzido um estrondo a partir do estouro de uma bombinha colocada sobre o suporte no palco. Os sinais captados pelos microfones da frente e de trás do auditório podem ser observados na Figura A, e representam diretamente a resposta ao impulso da sala.

[IRs obtidas de forma direta pelo estouro da bombinha no auditório, captadas pelo microfone da frente (abaixo) e de trás (acima). Intensidade do sinal em escala logarítmica. Diferença de tempo de chegada do primeiro pico selecionada em destaque. Visualização da cauda de decaimento até alcançar o nível do ruído ambiente.](/imagem7.jpg)



Para fins de checagem dos dados, foi aferida a diferença de tempo da chegada do primeiro pico do estouro (som direto) entre o microfone da frente e o microfone de trás:

$t2 = 55,666575 s$
$t1 = 55,652495 s$
$Δt = 0,01408 s$

Distância entre os microfones calculada X medida:

$Dcalc = c * Δt = 340 * 0,01408 = 4,7872 m$
$Dmed = 10,00 - 5,75 = 4,25 m$

Nota-se uma variação de pouco mais de 0,5m, o que considerou-se aceitável. Possivelmente a medida com a trena sofreu variação pois a trena possuía apenas 3 metros de comprimento e, portanto, os comprimentos foram medidos de forma segmentada.
