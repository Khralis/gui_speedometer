local show_hud = true
Citizen.CreateThread(function()
  while true do
  Wait(1)
  if IsControlJustPressed(1, hide_speedo) then
    if show_hud then
      show_hud = false
    else
      show_hud = true
      end end
      playerPed = GetPlayerPed(-1)
      if playerPed then
        playerCar = GetVehiclePedIsIn(playerPed, false)
        if playerCar and GetPedInVehicleSeat(playerCar, - 1) == playerPed then
          carSpeed = GetEntitySpeed(playerCar)
          hash = GetEntityModel(playerCar)
          speed = GetVehicleMaxSpeed(hash)
          ms = (speed * 2.23693629)
          mph = math.ceil(carSpeed * 2.236936)
          kmh = math.ceil(carSpeed * 3.6)
          if auto_hide and (carSpeed > 0.0) then
            show_hud = true
          else
            show_hud = false
            if not auto_hide and not show_hud then
              show_hud = true
              end end
              SendNUIMessage({
                show_hud = show_hud,
                show_debug = show_debug,
                ussc = use_solid_speed_color,
                usuc = use_solid_unit_color,
                dBL1 = hash,
                dBL2 = ms,
                dBL3 = mph,
                dBL4 = kmh,
                uL1 = "MPH",
                uL2 = "KM/H",
                mph = mph,
                kmh = kmh,
                ms = ms,
                speedColorMPH = speedColorMPH,
                speedColorKMH = speedColorKMH,
                unitColorMPH = unitColorMPH,
                unitColorKMH = unitColorKMH,
              })
            else
              SendNUIMessage({
                show_hud = false,
                show_debug = show_debug,
                mph = 0,
                kmh = 0,
                ms = 0,
              })
            end
          end
        end
      end)
