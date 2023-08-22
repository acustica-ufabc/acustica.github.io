---
layout: layouts/base.njk
title: Lab de Acústica
---

# Laboratório de Acústica

## Grupo

- Danilo Misura de Oliveira - RA 11006514
- Kaleb Alves - RA 21049916
- Lucas Ribeiro da Silva - RA 21006316

## Relatorio 1

 ### Questão 3
#### Letra A) Visão Superior, teto e lateral
![Planta da sala](./imagem1.jpg)
![Distância dos microfones](./imagem2.jpg)

#### Letra B)
![Palco](./imagem3.jpg)
![Rampa](./imagem4.jpg)
![Cadeira](./imagem5.jpg)

#### Letra C) Volume e área total (sem cadeiras)
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

#### Letra D)

![Imagem do auditorio](./imagem6.jpg)


### Questão 4
#### Letra A) 
$Test = 0,163V/A = 0.163*517.1888/474.362175 = 0.1777Ss$
#### Letra B)
$dmin = 2√(V/cTest)=517.1888/(340*0.1777) = 0.376m$
#### Letra C) 
        Para todas as medições recomendam-se no mínimo 3 medições para cada microfone. (Colocar os áudios em ordem)


### Questão 5

#### Letra A)
        Foi produzido um estrondo a partir do estouro de uma bombinha colocada sobre o suporte no palco. Os sinais captados pelos microfones da frente e de trás do auditório podem ser observados na Figura A, e representam diretamente a resposta ao impulso da sala.

![IRs obtidas de forma direta pelo estouro da bombinha no auditório, captadas pelo microfone da frente (abaixo) e de trás (acima). Intensidade do sinal em escala logarítmica. Diferença de tempo de chegada do primeiro pico selecionada em destaque. Visualização da cauda de decaimento até alcançar o nível do ruído ambiente.](./imagem7.jpg)



Para fins de checagem dos dados, foi aferida a diferença de tempo da chegada do primeiro pico do estouro (som direto) entre o microfone da frente e o microfone de trás:

$t2 = 55,666575 s$
$t1 = 55,652495 s$
$Δt = 0,01408 s$

Distância entre os microfones calculada X medida:

$Dcalc = c * Δt = 340 * 0,01408 = 4,7872 m$
$Dmed = 10,00 - 5,75 = 4,25 m$

Nota-se uma variação de pouco mais de 0,5m, o que considerou-se aceitável. Possivelmente a medida com a trena sofreu variação pois a trena possuía apenas 3 metros de comprimento e, portanto, os comprimentos foram medidos de forma segmentada.



![Figura: resposta em frequência obtida do sinal do microfone da frente](./imagem8.jpg)
![Figura: resposta em frequência obtida do sinal do microfone de trás](./imagem9.jpg)


### Questão 6
- Para o impulso obtido de forma direta pelo estouro da bombinha, obteve-se as curvas de decaimento através de aproximação visual, a partir das quais estimou-se o RT60 na posição de cada microfone.


![zoom - estouro e decaimento no microfone da frente. Aproximação visual para o envelope de decaimento de -35dB.](./imagem10.jpg)

- Da Figura 2 se afere:
$t-5 = 55,765 s$
$t-35 = 56,180 s$
$RT60 = 2 * ( t–35 - t-5) = 0,830 s$


![zoom – estouro e decaimento no microfone do fundo do auditório. Aproximação visual para o envelope de decaimento de -35dB.](./imagem11.jpg)
- Da figura 3 afere-se:
$t-5 = 55,760 s$
$t-35 = 56,210 s$
$RT60 = 2 * ( t–35 - t-5) = 0,900 s$

![Figura: EDT aproximado pelos picos para o microfone da frente. O pico de maior amplitude saturou, então apesar de parecer acompanhar a tendência dos picos logo abaixo, a inclinação desta reta não é um dado confiável.](./imagem12.jpg)

$t0 = 55,655 s$
$t-10 = 55,760 s$
$EDT = 6*(t-10 - t0) = 0,630 s$


![Figura: EDT aproximado pelos picos para o microfone de trás.](./imagem13.jpg)

$ t0 = 55,680 s $
$ t-10 = 55,820 s $
$ EDT = 6*(t-10 - t0) = 0,840 s $
Considerando que apenas o resultado para o microfone de trás é confiável, o EDT não variou em relação ao RT60.




### Questão 8



### Questão 9
